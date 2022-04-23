import { useHistory } from "react-router-dom";
import { FlexboxGrid, Col, Button } from "rsuite";

import "./FeaturedProduct.css";

const FeaturedProduct = ({ img, title, description, link }) => {
  const history = useHistory();

  return (
    <FlexboxGrid className="featured-product">
      <FlexboxGrid.Item
        className="featured-product-text"
        as={Col}
        colspan={24}
        md={12}
      >
        <p style={{ color: "#D87D4A" }}>NEW PRODUCT</p>

        <h2 style={{ color: "#000", marginBottom: "1rem" }}>{title}</h2>

        <p style={{ marginBottom: "1rem" }}>{description}</p>

        <Button onClick={() => history.push(link)}>SEE PRODUCT</Button>
      </FlexboxGrid.Item>

      <FlexboxGrid.Item
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
