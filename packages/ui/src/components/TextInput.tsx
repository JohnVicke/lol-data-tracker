import React, { InputHTMLAttributes } from "react";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useField } from "formik";
import { clsx } from "clsx";

type TextInputColors = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

type TextInputVariants = "bordered" | "ghost";

type TextInputSizes = "lg" | "md" | "sm" | "xs";

export type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "color"> & {
  variant?: TextInputVariants;
  size?: TextInputSizes;
  disableAnimation?: boolean;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  wide?: boolean;
  color?: TextInputColors;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  label: string;
  name: string;
};

const labelAnimation: AnimationProps["variants"] = {
  initial: {
    left: "1rem",
    y: "4px",
    fontSize: "1rem",
  },
  active: {
    left: 0,
    y: "-2rem",
    fontSize: "0.75rem",
  },
};

export const TextInput = ({
  color,
  type,
  variant,
  size,
  loading,
  wide,
  disabled,
  active,
  className,
  endIcon,
  startIcon,
  label,
  onSubmit,
  ...props
}: TextInputProps) => {
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [field, { error }] = useField(props);

  return (
    <div className="form-control relative my-4">
      <div className="relative">
        {label && (
          <motion.div
            onClick={() => inputRef.current?.focus()}
            className="label absolute"
            variants={labelAnimation}
            initial="initial"
            animate={focused ? "active" : "initial"}
          >
            {label}
          </motion.div>
        )}
        <input
          {...field}
          {...props}
          ref={inputRef}
          onFocus={() => setFocused(true)}
          onBlur={e => {
            if (e.target.value !== "") {
              return;
            }
            setFocused(false);
          }}
          className={clsx(
            "input bg-neutral w-full",
            { "pr-12": !!endIcon },
            { [`input-${size}`]: !!size },
            { [`input-${type}`]: !!type },
            { [`input-${variant}`]: !!variant },
            { [`input-${color}`]: !!color },
            { [`input-${wide}`]: !!wide },
            { [`input-${disabled}`]: !!disabled },
            { [`input-${active}`]: !!active },
            { "input-error": !!error },
            { loading: !!loading },
            { "gap-2": !!endIcon || !!startIcon },
            className,
          )}
        />
        {endIcon && <div className="absolute top-[50%] right-4 translate-y-[-50%] h-6 w-6">{endIcon}</div>}
      </div>
      <AnimatePresence mode="wait">
        {error && (
          <motion.div className="text-error font-xs absolute top-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
