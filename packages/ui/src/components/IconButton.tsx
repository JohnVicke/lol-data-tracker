import * as React from "react";
import { clsx } from "clsx";

type IconButtonColors = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

type IconButtonVariants = "square" | "circle";

type IconButtonSizes = "lg" | "md" | "sm" | "xs";

export type IconButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "color" | "children"
> & {
  children?: React.ReactNode;
  color?: IconButtonColors;
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
  disableAnimation?: boolean;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const sizes = {
  lg: "h-10 w-10",
  md: "h-8 w-8",
  sm: "h-6 w-6",
  xs: "h-4 w-4",
};

export const IconButton = ({
  color,
  children,
  loading,
  disabled,
  active,
  className,
  size = "md",
  variant = "square",
  ...props
}: IconButtonProps) => (
  <button
    className={clsx(
      "btn",
      { [`btn-${size}`]: !!size },
      { [`btn-${variant}`]: !!variant },
      { [`btn-${color}`]: !!color },
      { loading: !!loading },
      { [`btn-${disabled}`]: !!disabled },
      { [`btn-${active}`]: !!active },
      className,
    )}
    {...props}
  >
    {!loading && <div className={sizes[size]}>{children}</div>}
  </button>
);
