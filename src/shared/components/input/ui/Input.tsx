export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <input
    {...props}
    className={`w-full border border-zinc-300 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
      props.className || ""
    }`}
  />
);
