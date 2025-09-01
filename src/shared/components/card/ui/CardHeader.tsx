export const CardHeader: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div className={`px-4 pt-4 ${className}`}>{children}</div>
);
