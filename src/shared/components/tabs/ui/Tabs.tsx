export const Tabs: React.FC<
  React.PropsWithChildren<{ defaultValue: string; className?: string }>
> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const TabsList: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => (
  <div className={`flex gap-2 ${className}`}>{children}</div>
);
export const TabsTrigger: React.FC<
  React.PropsWithChildren<{ value: string; className?: string }>
> = ({ children, className = "" }) => (
  <button
    className={`rounded-md border px-3 py-1 text-sm hover:bg-zinc-100 ${className}`}
  >
    {children}
  </button>
);
export const TabsContent: React.FC<
  React.PropsWithChildren<{ value: string; className?: string }>
> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
