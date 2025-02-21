import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";
import hStyles from "./Heading.module.css";
import styles from "./Text.module.css";

const commonVariants = {
  size: {
    h1: hStyles.h1,
    h2: hStyles.h2,
    h3: hStyles.h3,
    h4: hStyles.h4,
    h5: hStyles.h5,
    h6: hStyles.h6,
    medium: styles.medium,
    small: styles.small,
    xl: styles.xl,
    lg: styles.lg,
    md: styles.md,
    default: styles.default,
    sm: styles.sm,
    ml: styles.metaLarge,
    meta: styles.meta,
    nav: styles.nav,
  },
  align: {
    left: styles.left,
    center: styles.center,
    right: styles.right,
  },
  italic: {
    true: styles.italic,
  },
  uppercase: {
    true: styles.uppercase,
  },
  fontStyle: {
    italic: styles.italic,
  },
  balanced: {
    true: styles.balanced,
  },
  shrink: {
    true: styles.shrink,
  },
};

export const textVariants = cva(styles.text, {
  variants: commonVariants,
});

export const headingVariants = cva(hStyles.heading, {
  variants: commonVariants,
  defaultVariants: {
    size: "h1",
  },
});

export type PropsParagraph = HTMLAttributes<"p" | "span"> &
  VariantProps<typeof textVariants> & {
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "cite";
    weight?: number;
  };

export type PropsHeading = {
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  class?: string;
  weight?: number;
} & HTMLAttributes<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"> &
  VariantProps<typeof headingVariants>;
