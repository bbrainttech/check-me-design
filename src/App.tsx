import { PropsWithChildren } from "react";
import { ScrollToTop } from "./components";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <section>
      {children}
      <ScrollToTop />
    </section>
  );
};

export default Layout;
