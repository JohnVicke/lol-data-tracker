import React from "react";
import { ComponentStory } from "@storybook/react";
import { createStory } from "../../utils/createStory";

import { Button } from "ui";
import type { ButtonProps } from "ui";

console.log("hello world");

export const Base: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args}>button</Button>;

export default createStory(Button);
