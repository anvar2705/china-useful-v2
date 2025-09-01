export const Card: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div className={`rounded-lg border border-zinc-200 bg-white ${className}`}>
    {children}
  </div>
);
