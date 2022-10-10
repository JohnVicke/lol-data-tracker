import clsx from "clsx";
import React from "react";

type TextComponents = "h1" | "h2" | "h3" | "h4" | "p";

type TextVariants = "overline";

export type TextProps = React.PropsWithChildren & {
  component?: TextComponents;
  variant?: TextVariants;
};

const styles: { [key in TextComponents]: string } = {
  h1: "text-4xl font-bold",
  h2: "text-2xl font-bold",
  h3: "text-xl font-bold",
  h4: "text-lg font-bold",
  p: "text-base",
};

const variants: { [key in TextVariants]: string } = {
  overline: "uppercase tracking-wider font-medium",
};

export const Text = ({ children, variant, component = "p" }: TextProps) => {
  const Component = component as keyof JSX.IntrinsicElements;
  return (
    <Component
      className={clsx("tracking-wide", styles[component], {
        [`${variants[variant as TextVariants]}`]: !!variant,
      })}
    >
      {children}
    </Component>
  );
};
