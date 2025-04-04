import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "overline";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "accent"
  | "tertiary"
  | "white";

interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
  children: React.ReactNode;
  component?: ElementType;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "text-6xl font-cardo tracking-wider leading-20",
  h2: "text-5xl font-cardo tracking-wider leading-16",
  h3: "text-4xl font-cardo tracking-wider leading-14",
  h4: "text-3xl font-cardo tracking-wider leading-12",
  h5: "text-2xl font-cardo tracking-wider leading-9",
  h6: "text-xl font-cardo tracking-wider leading-8",
  body1: "text-lg font-inter leading-7",
  body2: "text-base font-inter leading-6",
  caption: "text-sm font-inter leading-5",
  overline: "text-xs font-inter leading-4 tracking-widest uppercase",
};

const colorStyles: Record<TypographyColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  tertiary: "text-tertiary",
  white: "text-white",
};

const defaultComponents: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  color = "primary",
  className = "",
  children,
  component,
}) => {
  const Component = component || defaultComponents[variant];
  const baseStyles = variantStyles[variant];
  const colorStyle = colorStyles[color];

  return (
    <Component className={twMerge(baseStyles, colorStyle, className)}>
      {children}
    </Component>
  );
};
