import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "ui";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button>Button</Button>
);

export const Primary = Template.bind({});
