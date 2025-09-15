import { ButtonProps } from "../types";

export const Button = (props: ButtonProps) => {
  const {
    className = "",
    variant = "contained",
    size = "md",
    onClick,
    children,
  } = props;

  const base =
    "text-md rounded-4xl inline-flex items-center justify-center font-medium cursor-pointer transition-colors focus:outline-none disabled:opacity-50 uppercase";
  let styles = "";
  if (variant === "contained")
    styles =
      "bg-primary border border-primary text-white hover:bg-primary-dark hover:border-primary-dark";
  if (variant === "outlined")
    styles =
      "bg-transparent border border-primary hover:bg-primary hover:text-white";
  const padding = size === "sm" ? "px-3 py-1.5 text-sm" : "px-8 py-2.5";

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles} ${padding} ${className}`}
    >
      {children}
    </button>
  );
};
