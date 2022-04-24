import Menu from "../../Components/Common/Menu/Menu";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import HomeHeader from "../../Components/Home/HomeHeader/HomeHeader";
import ProductMosaic from "../../Components/Home/ProductMosaic/ProductMosaic";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <HomeHeader />

      <div className="container">
        <Menu />

        <ProductMosaic />

        <SomeGuy />
      </div>
    </div>
  );
};

export default Home;
