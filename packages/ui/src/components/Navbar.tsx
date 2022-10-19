import React from "react";

export type NavbarProps = React.PropsWithChildren;

export const Navbar = ({ children }: NavbarProps) => <div className="navbar bg-neutral fixed top-0">{children}</div>;
