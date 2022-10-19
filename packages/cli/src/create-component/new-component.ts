import fs from "fs/promises";
import chalk from "chalk";
import path from "path";
import inquirer from "inquirer";
import { getComponentTemplate } from "./templates/component-template";
import { getStoryTemplate } from "./templates/story-template";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log = {
  error: (...args: unknown[]) => console.log(chalk.red(...args)),
  success: (...args: unknown[]) => console.log(chalk.green(...args)),
  info: (...args: unknown[]) => console.log(chalk.cyan(...args)),
};

const PROJECT_ROOT = path.join(__dirname, "../", "../", "../");
const STORYBOOK_PATH = path.join(PROJECT_ROOT, "apps/storybook");
const UI_PATH = path.join(PROJECT_ROOT, "packages/ui");

type ComponentOptions = {
  componentName: string;
  story: boolean;
};

export const validateComponentName = async (input: string) => {
  const regex = /^[A-Z]\S*(?:\s+[A-Z]\S*)*$/;

  if (!regex.test(input)) {
    return "Component name must start with uppercase letter and only include letters";
  }

  const componentPath = path.join(UI_PATH, `src/components/${input}.tsx`);
  const fileExist = await fs
    .access(componentPath)
    .then(() => true)
    .catch(() => false);

  if (fileExist) {
    return "Component already exists";
  }
  return true;
};

const promptComponentName = async (): Promise<string> => {
  const { componentName } = await inquirer.prompt<Pick<ComponentOptions, "componentName">>({
    name: "componentName",
    type: "input",
    message: "What will your component be called?",
    default: "MyComponent",
    validate: validateComponentName,
    transformer: (input: string) => input.trim(),
  });

  return componentName;
};

const promptCreateStory = async (): Promise<boolean> => {
  const { story } = await inquirer.prompt<Pick<ComponentOptions, "story">>({
    name: "story",
    type: "confirm",
    message: "Create story?",
    default: true,
  });
  return story;
};

const writeStory = async (componentName: string) => {
  console.log("Writing story...");
  const storyPath = path.join(STORYBOOK_PATH, `stories/components/${componentName}.stories.tsx`);
  await fs.writeFile(storyPath, getStoryTemplate(componentName));
};

const getOptions = async (): Promise<ComponentOptions> => {
  const componentName = await promptComponentName();
  const story = await promptCreateStory();
  return {
    componentName,
    story,
  };
};

export const createComponent = async () => {
  const { componentName, story } = await getOptions();
  const componentPath = path.join(UI_PATH, `src/components/${componentName}.tsx`);

  const indexPath = path.join(UI_PATH, "src/components/index.tsx");

  log.info("Creating component...");

  await fs.writeFile(componentPath, getComponentTemplate(componentName));
  log.success("Component created! 🎉");
  log.info("Creating story...");
  if (story) await writeStory(componentName);
  await fs.writeFile(indexPath, `export * from "./${componentName}";\n`, { flag: "a" });
  log.success("Story created! 🎉");

  log.success(`\nComponent path: ${componentPath}`);
  log.success(`Story path: ${path.join(STORYBOOK_PATH, `stories/components/${componentName}.stories.tsx`)}`);
};
