export const Container: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-4 md:px-6 ${className}`}>
    {children}
  </div>
);
