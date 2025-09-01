export const CardTitle: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <h3 className={`font-semibold ${className}`}>{children}</h3>
);
