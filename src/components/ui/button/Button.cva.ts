import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.css";

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles.default,
      primary: styles.primary,
      ghost: styles.ghost,
    },
    size: {
      md: styles.medium,
      sm: styles.small,
      lg: styles.large,
      xl: styles.xlarge,
    },
    fullWidth: {
      true: styles["full-width"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
