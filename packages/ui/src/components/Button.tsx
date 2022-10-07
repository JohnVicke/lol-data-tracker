import * as React from "react";
import { clsx } from "clsx";

type ButtonColors =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

type ButtonVariants = "ghost" | "link" | "outline" | "block" | "wide";

type ButtonSizes = "lg" | "md" | "sm" | "xs";

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "color"
> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  disableAnimation?: boolean;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  wide?: boolean;
  color?: ButtonColors;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
};

export const Button = ({
  color,
  type,
  variant,
  size,
  children,
  loading,
  wide,
  disabled,
  active,
  className,
  endIcon,
  startIcon,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(
      "btn",
      { [`btn-${size}`]: !!size },
      { [`btn-${type}`]: !!type },
      { [`btn-${variant}`]: !!variant },
      { [`btn-${color}`]: !!color },
      { [`btn-${wide}`]: !!wide },
      { [`btn-${disabled}`]: !!disabled },
      { [`btn-${active}`]: !!active },
      { loading: !!loading },
      { "gap-2": !!endIcon || !!startIcon },
      className
    )}
    {...props}
  >
    {startIcon}
    {children}
    {endIcon}
  </button>
);
