import { PropsWithChildren } from "react";

export const Title = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className="flex justify-center">
      <h2
        className={`text-5xl text-center text-primary-dark font-semibold border-b-2 border-primary-dark  pt-16 pb-8 mb-8 w-full ${className}`}
      >
        {children}
      </h2>
    </div>
  );
};
