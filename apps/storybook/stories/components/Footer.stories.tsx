import React from "react";
import { ComponentStory } from "@storybook/react";
import { createStory } from "../../utils/createStory";

import { Footer } from "ui";
import type { FooterProps } from "ui";
import { BeakerIcon } from "@heroicons/react/24/solid";

export const Base: ComponentStory<typeof Footer> = (args: FooterProps) => <Footer {...args} />;

export const Primary = Base.bind({});
Primary.args = {
  logo: <div>Logo</div>,
  socialLinks: [
    {
      text: "Twitter",
      href: "https://twitter.com",
      icon: <BeakerIcon />,
    },
    {
      text: "Twitter",
      href: "https://twitter.com",
      icon: <BeakerIcon />,
    },
    {
      text: "Twitter",
      href: "https://twitter.com",
      icon: <BeakerIcon />,
    },
    {
      text: "Twitter",
      href: "https://twitter.com",
      icon: <BeakerIcon />,
    },
  ],
  rows: [
    {
      title: "Row 1",
      links: [
        {
          text: "Link 1",
          href: "#",
        },
        {
          text: "Link 2",
          href: "#",
        },
      ],
    },
    {
      title: "Row 3",
      links: [
        {
          text: "Link 1",
          href: "#",
        },
        {
          text: "Link 2",
          href: "#",
        },
      ],
    },
    {
      title: "Row 4",
      links: [
        {
          text: "Link 1",
          href: "#",
        },
        {
          text: "Link 2",
          href: "#",
        },
      ],
    },
    {
      title: "Row 5",
      links: [
        {
          text: "Link 1",
          href: "#",
        },
        {
          text: "Link 2",
          href: "#",
        },
      ],
    },
  ],
  copyRight:
    "Copyright © 2022- imbalol. imbalol isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.",
};

export default createStory(Footer);
