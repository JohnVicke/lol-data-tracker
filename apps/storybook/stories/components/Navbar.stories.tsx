import React from "react";
import { ComponentStory } from "@storybook/react";
import { createStory } from "../../utils/createStory";

import { Navbar } from "ui";
import type { NavbarProps } from "ui";

export const Base: ComponentStory<typeof Navbar> = (args: NavbarProps) => <Navbar {...args}>Hihi</Navbar>;

export default createStory(Navbar);
