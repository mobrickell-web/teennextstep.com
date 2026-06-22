import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-heading text-[36px] leading-[44px] font-extrabold tracking-[-0.014em] text-foreground",
      h2: "font-display text-[32px] leading-[36px] font-bold tracking-[-0.01em] text-foreground",
      "choose-panel-headline":
        "font-display text-[32px] leading-[41px] font-medium tracking-normal text-foreground",
      h3: "font-display text-[22px] leading-[32px] font-semibold text-foreground",
      h4: "font-display text-[20px] leading-[28px] font-medium text-foreground",
      h5: "font-sans text-[18px] leading-[25px] font-regular text-foreground",
      "body-regular":
        "font-sans text-base font-normal leading-normal text-foreground",
      "body-medium":
        "font-sans text-base font-medium leading-normal text-foreground",
      "body-semibold":
        "font-sans text-base font-semibold leading-normal text-foreground",
      "body-bold":
        "font-sans text-xl font-bold leading-normal text-foreground",
      "button-regular": "font-sans text-base font-normal leading-normal",
      "button-medium": "font-sans text-base font-medium leading-normal",
      "button-semibold": "font-sans text-base font-semibold leading-normal",
      "button-bold": "font-sans text-sm font-bold leading-normal",
      "muted-sm":
        "font-sans text-[14px] leading-[20px] font-normal text-grey-text",
      muted: "font-sans text-lg font-normal leading-normal text-grey-text",
    },
  },
  defaultVariants: {
    variant: "body-regular",
  },
});

const defaultElement: Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  keyof React.JSX.IntrinsicElements
> = {
  h1: "h1",
  h2: "h2",
  "choose-panel-headline": "p",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  "body-regular": "p",
  "body-medium": "p",
  "body-semibold": "p",
  "body-bold": "p",
  "button-regular": "span",
  "button-medium": "span",
  "button-semibold": "span",
  "button-bold": "span",
  muted: "p",
  "muted-sm": "p",
};

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

type TypographyProps<T extends React.ElementType = "p"> = {
  as?: T;
  variant?: TypographyVariant;
  className?: string;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "as" | "variant" | "className" | "children"
>;

function Typography<T extends React.ElementType = "p">({
  as,
  variant = "body-regular",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = (as ?? defaultElement[variant]) as React.ElementType;

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Typography, typographyVariants, type TypographyVariant };
