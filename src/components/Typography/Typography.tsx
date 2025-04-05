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

export type TypographyFont = "cardo" | "inter";

interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  font?: TypographyFont;
  className?: string;
  children: React.ReactNode;
  component?: ElementType;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "text-6xl tracking-wider leading-20",
  h2: "text-5xl tracking-wider leading-16",
  h3: "text-4xl tracking-wider leading-14",
  h4: "text-3xl tracking-wider leading-12",
  h5: "text-2xl tracking-wider leading-9",
  h6: "text-xl tracking-wider leading-8",
  body1: "text-lg leading-7",
  body2: "text-base leading-6",
  caption: "text-sm leading-5",
  overline: "text-xs leading-4 tracking-widest uppercase",
};

const fontStyles: Record<TypographyFont, string> = {
  cardo: "font-cardo",
  inter: "font-inter",
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
  font = "inter",
  className = "",
  children,
  component,
}) => {
  const Component = component || defaultComponents[variant];
  const baseStyles = variantStyles[variant];
  const colorStyle = colorStyles[color];
  const fontStyle = fontStyles[font];

  return (
    <Component
      className={twMerge(baseStyles, colorStyle, fontStyle, className)}
    >
      {children}
    </Component>
  );
};
