import FeaturedProduct from "../../Components/Common/FeaturedProduct/FeaturedProduct";
import Menu from "../../Components/Common/Menu/Menu";
import NewProduct from "../../Components/Common/NewProduct/NewProduct";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import Header from "../../Components/Layout/Header/Header";

import data from "../../data.json";

import "./Speakers.css";

const Speakers = () => {
  return (
    <>
      <div className="dark-header">
        <Header />

        <div className="dark-header-title">
          <h2>SPEAKERS</h2>
        </div>
      </div>

      <div className="container">
        <NewProduct
          img={`/assets/product-${data[5].slug}/desktop/image-product.jpg`}
          title={data[5].name.toUpperCase()}
          description={data[5].description}
          link="/headphones/5"
        />

        <FeaturedProduct
          img={`/assets/product-${data[4].slug}/desktop/image-product.jpg`}
          title={data[4].name.toUpperCase()}
          description={data[4].description}
          link="/headphones/4"
        />

        <Menu />

        <SomeGuy />
      </div>
    </>
  );
};

export default Speakers;
