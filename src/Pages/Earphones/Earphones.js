import Menu from "../../Components/Common/Menu/Menu";
import NewProduct from "../../Components/Common/NewProduct/NewProduct";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import Header from "../../Components/Layout/Header/Header";
import EarphonesImg from "./image-product.jpg";

import "./Earphones.css";

const Earphones = () => {
  return (
    <>
      <div className="earphones-header">
        <Header />

        <div className="earphones-header-title">
          <h2>EARPHONES</h2>
        </div>
      </div>

      <div className="earphones-page-content">
        <NewProduct
          img={EarphonesImg}
          title="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          link="/"
        />

        <Menu />

        <SomeGuy />
      </div>
    </>
  );
};

export default Earphones;
