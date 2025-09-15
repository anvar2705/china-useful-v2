import { ContainerProps } from "../types";

export const Container = ({
  children,
  outer,
  inner,
  overlay,
}: ContainerProps) => {
  const innerStyles = "container mx-auto w-full max-w-[1200px] px-4 md:px-6";
  return overlay ? (
    <div className={`w-full relative ${outer}`}>
      <div className={`absolute inset-0 ${overlay}`} />
      <div className={`relative z-10 ${innerStyles} ${inner}`}>{children}</div>
    </div>
  ) : (
    <div className={`w-full ${outer}`}>
      <div className={`${innerStyles} ${inner}`}>{children}</div>
    </div>
  );
};
