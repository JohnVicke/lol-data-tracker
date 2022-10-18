import inquirer from "inquirer";

export const validateComponentName = (input: string) => {
  const regex = /^[A-Za-z0-9]*$/;
  if (!regex.test(input)) {
    return "Component name must start with uppercase letter and only include letters";
  }
  return true;
};

const promptComponentName = async (): Promise<string> => {
  const { componentName } = await inquirer.prompt<{ componentName: string }>({
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
  const { story } = await inquirer.prompt<{ story: boolean }>({
    name: "story",
    type: "confirm",
    message: "Create story?",
    default: true,
  });
  return story;
};

const getOptions = async () => {
  const componentName = await promptComponentName();
  const story = await promptCreateStory();
  return {
    componentName,
    story,
  };
};

const createComponent = async () => {
  const options = await getOptions();
  console.log(options);
};

createComponent();
