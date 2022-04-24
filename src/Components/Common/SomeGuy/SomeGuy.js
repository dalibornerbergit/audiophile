import { useContext } from "react";
import { FlexboxGrid, Col } from "rsuite";
import { GlobalContext } from "../../../Contexts/GlobalContext";

import "./SomeGuy.css";

const SomeGuy = () => {
  const { isMobile } = useContext(GlobalContext);

  return (
    <div className="some-guy">
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item
          order={isMobile ? 2 : 1}
          className="some-guy-text-container"
          as={Col}
          colspan={24}
          md={12}
        >
          <div className="some-guy-text">
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
          order={isMobile ? 1 : 2}
          style={{
            backgroundImage: isMobile
              ? "url('/assets/shared/mobile/image-best-gear.jpg')"
              : "url('/assets/shared/desktop/image-best-gear.jpg')",
          }}
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
