import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
  onClick?: () => void;
}>;
