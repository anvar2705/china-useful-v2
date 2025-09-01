import { ButtonProps } from "../types";

export const Button = (props: ButtonProps) => {
  const {
    className = "",
    variant = "default",
    size = "md",
    onClick,
    children,
  } = props;

  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50";
  let styles = "";
  if (variant === "default") styles = "bg-red-600 text-white hover:bg-red-700";
  if (variant === "outline")
    styles = "border border-zinc-300 text-zinc-800 hover:bg-zinc-50";
  if (variant === "ghost") styles = "text-zinc-700 hover:bg-zinc-100";
  const padding = size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2";

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles} ${padding} ${className}`}
    >
      {children}
    </button>
  );
};
