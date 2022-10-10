import { ComponentMeta } from "@storybook/react";

export const createStory = (component: React.ComponentType<any>): ComponentMeta<typeof component> =>
({
  title: component.name,
  component,
} as ComponentMeta<typeof component>);
