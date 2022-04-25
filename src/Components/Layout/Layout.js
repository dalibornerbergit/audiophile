import { useEffect } from "react";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="ns-shop">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
