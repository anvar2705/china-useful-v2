import { TextareaHTMLAttributes } from "react";

export const Textarea = ({
  className,
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...rest}
    className={`w-full border border-zinc-300 px-3 py-2 text-md rounded-none focus:outline-none ${className}`}
  />
);
