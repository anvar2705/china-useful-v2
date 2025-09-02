import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  className?: string;
  variant?: "contained" | "outlined";
  size?: "sm" | "md";
  onClick?: () => void;
}>;
