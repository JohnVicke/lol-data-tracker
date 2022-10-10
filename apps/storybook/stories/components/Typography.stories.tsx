import React from "react";
import { ComponentStory } from "@storybook/react";
import { createStory } from "../../utils/createStory";

import { Text } from "ui";
import type { TextProps } from "ui";

const components: TextProps[] = [
  {
    component: "h1",
    children: "Heading 1",
  },
  {
    component: "h2",
    children: "Heading 2",
  },
  {
    component: "h3",
    children: "Heading 3",
  },
  {
    component: "h4",
    children: "Heading 4",
  },
  {
    component: "p",
    children:
      "Lorem ipsum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    variant: "overline",
    children: "overline",
  },
];

export const Base: ComponentStory<typeof Text> = (args: TextProps) => (
  <div className="flex flex-col gap-4 max-w-screen-md">
    {components.map(({ children, ...props }) => (
      <Text {...args} {...props}>{`${props?.component ? `${props.component}.` : ""} ${children}`}</Text>
    ))}
  </div>
);

export default createStory(Text);
