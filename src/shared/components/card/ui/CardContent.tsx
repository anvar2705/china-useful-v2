export const CardContent: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div className={`px-4 pb-4 ${className}`}>{children}</div>
);
