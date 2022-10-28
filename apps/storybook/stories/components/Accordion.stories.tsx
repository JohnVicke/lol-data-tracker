import React from "react";
import { ComponentStory } from "@storybook/react";
import { createStory } from "../../utils/createStory";

import { Accordion, AccordionHeader } from "ui";
import type { AccordionProps } from "ui";

export const Base: ComponentStory<typeof Accordion> = (args: AccordionProps) => <Accordion>hasd</Accordion>;

export default createStory(Accordion);
