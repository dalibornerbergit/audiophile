import { useHistory } from "react-router-dom";
import { FlexboxGrid, Col, Button } from "rsuite";

import "./NewProduct.css";

const NewProduct = ({ img, title, description, link }) => {
  const history = useHistory();

  return (
    <FlexboxGrid className="new-product">
      <FlexboxGrid.Item
        align="center"
        className="new-product-img"
        as={Col}
        colspan={24}
        md={12}
      >
        <img src={img} alt="X" />
      </FlexboxGrid.Item>

      <FlexboxGrid.Item
        className="new-product-text-container"
        as={Col}
        colspan={24}
        md={12}
      >
        <div className="new-product-text">
          <p style={{ color: "#D87D4A" }}>NEW PRODUCT</p>

          <h2 style={{ color: "#000", marginBottom: "1rem" }}>{title}</h2>

          <p style={{ marginBottom: "1rem" }}>{description}</p>

          <Button onClick={() => history.push(link)}>SEE PRODUCT</Button>
        </div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default NewProduct;
