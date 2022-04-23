import { Button } from "rsuite";
import Menu from "../../Components/Common/Menu/Menu";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import ProductMosaic from "../../Components/Home/ProductMosaic/ProductMosaic";
import Header from "../../Components/Layout/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="headphones-div">
        <Header />

        <div className="ad-section">
          <div className="ad-container">
            <p>NEW PRODUCT</p>

            <h1>XX99 MARK II HEADPHONES</h1>

            <p style={{ marginBottom: "2rem" }}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <Button>SET PRODUCT</Button>
          </div>
        </div>
      </div>

      <div className="home-page-content">
        <Menu />

        <ProductMosaic />

        <SomeGuy />
      </div>
    </div>
  );
};

export default Home;
