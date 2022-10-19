export const getStoryTemplate = (name: string) =>
  `import React from "react";
import { ComponentStory } from "@storybook/react";
import { createStory } from "../../utils/createStory";

import { ${name} } from "ui";
import type { ${name}Props } from "ui";

export const Base: ComponentStory<typeof ${name}> = (args: ${name}Props) => <${name} {...args} />;

export default createStory(${name});

  `;
