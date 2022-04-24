import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div className="ns-shop">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
