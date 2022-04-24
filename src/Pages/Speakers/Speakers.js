import FeaturedProduct from "../../Components/Common/FeaturedProduct/FeaturedProduct";
import Menu from "../../Components/Common/Menu/Menu";
import NewProduct from "../../Components/Common/NewProduct/NewProduct";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import Header from "../../Components/Layout/Header/Header";

import "./Speakers.css";

const Speakers = () => {
  return (
    <>
      <div className="speakers-header">
        <Header />

        <div className="speakers-header-title">
          <h2>SPEAKERS</h2>
        </div>
      </div>

      <div className="container">
        <NewProduct
          img="/assets/product-zx9-speaker/desktop/image-product.jpg"
          title="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          link="/speakers/5"
        />

        <FeaturedProduct
          img="/assets/product-zx7-speaker/desktop/image-product.jpg"
          title="ZX7 SPEAKER"
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          link="/speakers/4"
        />

        <Menu />

        <SomeGuy />
      </div>
    </>
  );
};

export default Speakers;
