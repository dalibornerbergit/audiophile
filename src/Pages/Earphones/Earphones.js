import Menu from "../../Components/Common/Menu/Menu";
import NewProduct from "../../Components/Common/NewProduct/NewProduct";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import Header from "../../Components/Layout/Header/Header";

import data from "../../data.json";

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

      <div className="container">
        <NewProduct
          img={`/assets/product-${data[0].slug}/desktop/image-product.jpg`}
          title={data[0].name.toUpperCase()}
          description={data[0].description}
          link="/earphones/0"
        />

        <Menu />

        <SomeGuy />
      </div>
    </>
  );
};

export default Earphones;
