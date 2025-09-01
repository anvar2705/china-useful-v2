export const Badge: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <span
    className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${className}`}
  >
    {children}
  </span>
);
