import React from "react";
import { ComponentStory } from "@storybook/react";
import { createStory } from "../../utils/createStory";

import { IconButton } from "ui";
import type { IconButtonProps } from "ui";
import { BeakerIcon } from "@heroicons/react/24/solid";

export const Base: ComponentStory<typeof IconButton> = (
  args: IconButtonProps
) => (
  <IconButton {...args}>
    <BeakerIcon />
  </IconButton>
);

export default createStory(IconButton);
