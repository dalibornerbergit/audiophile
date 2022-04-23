import { FlexboxGrid, Col } from "rsuite";

import "./ProductDetails.css";

const ProductDetails = ({ item }) => {
  return (
    <FlexboxGrid className="ns-product-details">
      <FlexboxGrid.Item as={Col} colspan={24} md={12}>
        <h3 style={{ marginBottom: "2rem" }}>FEATURES</h3>

        <p>{item.description}</p>
      </FlexboxGrid.Item>

      <FlexboxGrid.Item
        style={{ paddingLeft: "6rem" }}
        as={Col}
        colspan={24}
        md={12}
      >
        <h3 style={{ marginBottom: "2rem" }}>IN THE BOX</h3>

        <ul style={{ listStyle: "none", padding: "0" }}>
          {item.includes.map((inc, i) => (
            <li key={i}>
              <b style={{ color: "#D87D4A" }}>{inc.quantity}x</b> {inc.item}
            </li>
          ))}
        </ul>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default ProductDetails;
