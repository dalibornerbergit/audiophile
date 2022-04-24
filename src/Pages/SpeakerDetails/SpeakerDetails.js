import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FlexboxGrid, Col, Button, InputNumber, InputGroup } from "rsuite";
import Menu from "../../Components/Common/Menu/Menu";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import Header from "../../Components/Layout/Header/Header";
import YouMayAlsoLike from "../../Components/Common/YouMayAlsoLike/YouMayAlsoLike";
import ImageMosaic from "../../Components/Common/ImageMosaic/ImageMosaic";
import ProductDetails from "../../Components/Common/ProductDetails/ProductDetails";

import data from "../../data.json";

import "./SpeakerDetails.css";

const SpeakerDetails = () => {
  const params = useParams();

  const { selectedItems, setSelectedItems } = useContext(CartContext);

  const [value, setValue] = useState(1);

  const handleMinus = () => {
    setValue(parseInt(value, 10) - 1);
  };

  const handlePlus = () => {
    setValue(parseInt(value, 10) + 1);
  };

  const history = useHistory();

  // const speakerImg = params.id === "5" ? ZX9Speaker : ZX7Speaker;

  const handleAddItem = () => {
    let iterations = Array.from(Array(value).keys());
    let items = [];

    iterations.map(() => {
      return (items = [...items, data[params.id]]);
    });

    setSelectedItems([...selectedItems, ...items]);
  };

  return (
    <>
      <div className="speakers-header">
        <Header />
      </div>

      <div className="container">
        <p
          style={{ cursor: "pointer", marginBottom: "2rem" }}
          onClick={() => history.goBack()}
        >
          Go back
        </p>

        <FlexboxGrid className="speaker-details-item">
          <FlexboxGrid.Item
            align="center"
            className="speaker-details-item-img"
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
            className="speaker-details-item-text-container"
            as={Col}
            colspan={24}
            md={12}
          >
            <div className="speaker-details-item-text">
              <h2 style={{ color: "#000", marginBottom: "1rem" }}>
                {data[params.id].name}
              </h2>

              <p style={{ marginBottom: "1rem" }}>
                {data[params.id].description}
              </p>

              <h5 style={{ marginBottom: "1rem" }}>
                $ {data[params.id].price}
              </h5>

              <div style={{ display: "flex" }}>
                <InputGroup style={{ width: "100px", marginRight: "1rem" }}>
                  {value > 0 && (
                    <InputGroup.Button onClick={handleMinus}>
                      -
                    </InputGroup.Button>
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

        <ProductDetails item={data[params.id]} />

        <ImageMosaic item={data[params.id]} />

        <YouMayAlsoLike />

        <Menu />

        <SomeGuy />
      </div>
    </>
  );
};

export default SpeakerDetails;
