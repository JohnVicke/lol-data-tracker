import { Footer, FooterProps } from "ui";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Head from "next/head";

const footerProps: FooterProps = {
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

const defaultHead = {
  title: "imba lol",
  description: "High Elo League of Legends player's guide",
  icon: "/favicon.ico",
};

type DefaultLayoutProps = React.PropsWithChildren & {
  head?: {
    title: string;
    description: string;
    icon: string;
  };
};

export const DefaultLayout = ({ children, head = defaultHead }: DefaultLayoutProps) => (
  <>
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <link rel="icon" href={head.icon} />
    </Head>
    <div className="flex flex-col h-screen">
      <main className="container mx-auto max-w-screen-xl flex flex-1 flex-col gap-2">{children}</main>
      <div className="shrink mt-4">
        <Footer {...footerProps} />
      </div>
    </div>
  </>
);
