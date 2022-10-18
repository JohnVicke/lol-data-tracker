import React from "react";
import { IconButton } from "./IconButton";

type FooterRowLink = {
  text: string;
  href: string;
  icon?: React.ReactNode;
};

type FooterRow = {
  title: string;
  links: FooterRowLink[];
};

export type FooterProps = {
  logo: React.ReactNode;
  copyRight: string;
  socialLinks?: FooterRowLink[];
  rows: FooterRow[];
};

export const Footer = ({ rows, logo, copyRight, socialLinks }: FooterProps) => (
  <footer className="flex flex-col p-10 bg-neutral">
    <div className="flex flex-wrap gap-6 justify-between items-center">
      {rows.map(row => (
        <div key={row.title}>
          <h3 className="footer-title whitespace-nowrap">{row.title}</h3>
          <ul className="flex flex-col gap-2">
            {row.links.map(link => (
              <li key={link.href}>
                <a className="link link-hover whitespace-nowrap" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="divider my-4" />
    {copyRight}
    <div className="ml-auto mt-4">
      <ul className="flex gap-4 ">
        {socialLinks?.map(({ icon, href, text }) => (
          <IconButton key={href}>{icon}</IconButton>
        ))}
      </ul>
    </div>
  </footer>
);
