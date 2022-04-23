import { FlexboxGrid, Col } from "rsuite";

import "./SomeGuy.css";

const SomeGuy = () => {
  return (
    <div className="some-guy">
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item
          className="some-guy-text"
          as={Col}
          colspan={24}
          md={12}
        >
          <div style={{ paddingRight: "5rem" }}>
            <h2 style={{ marginBottom: "2rem" }}>
              BRINGING YOU THE <span style={{ color: "#D87D4A" }}>BEST</span>{" "}
              AUDIO GEAR
            </h2>

            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          className="some-guy-img"
          as={Col}
          colspan={24}
          md={12}
        ></FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default SomeGuy;
