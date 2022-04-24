import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FlexboxGrid, Col, Button } from "rsuite";
import { GlobalContext } from "../../../Contexts/GlobalContext";

import "./FeaturedProduct.css";

const FeaturedProduct = ({ img, title, description, link }) => {
  const history = useHistory();

  const { isMobile } = useContext(GlobalContext);

  return (
    <FlexboxGrid className="featured-product">
      <FlexboxGrid.Item
        order={isMobile ? 2 : 1}
        className="featured-product-text-container"
        as={Col}
        colspan={24}
        md={12}
      >
        <div className="featured-product-text">
          <h2 style={{ color: "#000", marginBottom: "1rem" }}>{title}</h2>

          <p style={{ marginBottom: "1rem" }}>{description}</p>

          <Button onClick={() => history.push(link)}>SEE PRODUCT</Button>
        </div>
      </FlexboxGrid.Item>

      <FlexboxGrid.Item
        order={isMobile ? 1 : 2}
        align="center"
        className="featured-product-img"
        as={Col}
        colspan={24}
        md={12}
      >
        <img src={img} alt="X" />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default FeaturedProduct;
