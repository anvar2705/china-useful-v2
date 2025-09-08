import type { MainLayoutProps } from "../types";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
