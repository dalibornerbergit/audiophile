import { useContext, useState } from "react";
import { FlexboxGrid, Col, Button, InputNumber, InputGroup } from "rsuite";
import { CartContext } from "../../../Contexts/CartContext";

import "./ItemDetails.css";

const ItemDetails = ({ data, params }) => {
  const { selectedItems, setSelectedItems } = useContext(CartContext);

  const [value, setValue] = useState(1);

  const handleMinus = () => {
    setValue(parseInt(value, 10) - 1);
  };

  const handlePlus = () => {
    setValue(parseInt(value, 10) + 1);
  };

  const handleAddItem = () => {
    let iterations = Array.from(Array(value).keys());
    let items = [];

    iterations.map(() => {
      return (items = [...items, data[params.id]]);
    });

    setSelectedItems([...selectedItems, ...items]);
  };

  return (
    <FlexboxGrid className="item-details-item">
      <FlexboxGrid.Item
        align="center"
        className="item-details-item-img"
        as={Col}
        colspan={24}
        md={12}
      >
        <img
          src={`/assets/product-${
            data[params.id].slug
          }/desktop/image-product.jpg`}
          alt="X"
        />
      </FlexboxGrid.Item>

      <FlexboxGrid.Item
        className="item-details-item-text-container"
        as={Col}
        colspan={24}
        md={12}
      >
        <div className="item-details-item-text">
          <h2 style={{ color: "#000", marginBottom: "1rem" }}>
            {data[params.id].name.toUpperCase()}
          </h2>

          <p style={{ marginBottom: "1rem" }}>{data[params.id].description}</p>

          <h5 style={{ marginBottom: "1rem" }}>$ {data[params.id].price}</h5>

          <div style={{ display: "flex" }}>
            <InputGroup style={{ width: "100px", marginRight: "1rem" }}>
              {value > 0 && (
                <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
              )}
              <InputNumber
                min={0}
                className={"custom-input-number"}
                value={value}
                onChange={setValue}
              />
              <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
            </InputGroup>

            <Button onClick={handleAddItem}>ADD TO CART</Button>
          </div>
        </div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default ItemDetails;
