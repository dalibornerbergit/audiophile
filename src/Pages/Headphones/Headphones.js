import FeaturedProduct from "../../Components/Common/FeaturedProduct/FeaturedProduct";
import Menu from "../../Components/Common/Menu/Menu";
import NewProduct from "../../Components/Common/NewProduct/NewProduct";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import Header from "../../Components/Layout/Header/Header";

import data from "../../data.json";

const Headphones = () => {
  return (
    <>
      <div className="dark-header">
        <Header />

        <div className="dark-header-title">
          <h2>HEADPHONES</h2>
        </div>
      </div>

      <div className="container">
        <NewProduct
          img={`/assets/product-${data[1].slug}/desktop/image-product.jpg`}
          title={data[1].name.toUpperCase()}
          description={data[1].description}
          link="/headphones/1"
        />

        {data.slice(2, 4).map((item, i) => (
          <FeaturedProduct
            key={i}
            img={`/assets/product-${item.slug}/desktop/image-product.jpg`}
            title={item.name.toUpperCase()}
            description={item.description}
            link={`/headphones/${i + 2}`}
          />
        ))}

        <Menu />

        <SomeGuy />
      </div>
    </>
  );
};

export default Headphones;
