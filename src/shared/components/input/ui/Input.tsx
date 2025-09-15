import { InputHTMLAttributes } from "react";

export const Input = ({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...rest}
    className={`w-full border border-zinc-300 px-3 py-2 text-md focus:outline-none ${className}`}
  />
);
