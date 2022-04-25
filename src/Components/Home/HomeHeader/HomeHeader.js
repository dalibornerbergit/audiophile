import Header from "../../Layout/Header/Header";
import { Button } from "rsuite";

import "./HomeHeader.css";
import { useHistory } from "react-router-dom";

const HomeHeader = () => {
  const history = useHistory();

  return (
    <div
      className="headphones-div"
      style={{
        backgroundImage: "url('/assets/home/desktop/image-hero.jpg')",
      }}
    >
      <Header />

      <div className="ad-section">
        <div className="ad-container">
          <p style={{ letterSpacing: "3px" }}>NEW PRODUCT</p>

          <h1>XX99 MARK II HEADPHONES</h1>

          <p style={{ marginBottom: "2rem" }}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button onClick={() => history.push("/headphones/3")}>
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
