import { ContainerProps } from "../types";

export const Container = ({ children, outer, inner }: ContainerProps) => (
  <div className={`w-full ${outer}`}>
    <div
      className={`container mx-auto w-full max-w-[1200px] px-4 md:px-6 ${inner}`}
    >
      {children}
    </div>
  </div>
);
