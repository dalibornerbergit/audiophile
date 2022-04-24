import { useHistory } from "react-router-dom";
import { FlexboxGrid, Col, Button } from "rsuite";

import "./ProductMosaic.css";

const ProductMosaic = () => {
  const history = useHistory();

  return (
    <FlexboxGrid>
      <FlexboxGrid.Item
        id="zx9"
        className="ns-mosaic-item"
        as={Col}
        colspan={24}
      >
        <FlexboxGrid>
          <FlexboxGrid.Item
            style={{ textAlign: "center" }}
            as={Col}
            colspan={24}
            md={12}
          >
            <img src="/assets/home/desktop/image-speaker-zx9.png" alt="X" />
          </FlexboxGrid.Item>

          <FlexboxGrid.Item
            className="speaker-info"
            as={Col}
            colspan={24}
            md={12}
          >
            <div>
              <h1>
                ZX9 <br /> SPEAKER
              </h1>

              <p style={{ maxWidth: "350px", marginBottom: "2rem" }}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>

              <Button
                appearance="primary"
                onClick={() => history.push("/speakers/5")}
              >
                SEE PRODUCT
              </Button>
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </FlexboxGrid.Item>

      {/* 2. */}
      <FlexboxGrid.Item
        id="zx7"
        style={{
          backgroundImage: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        }}
        className="ns-mosaic-item"
        as={Col}
        colspan={24}
      >
        <div className="speaker-info">
          <h3 style={{ marginBottom: "2rem" }}>ZX7 SPEAKER</h3>

          <Button
            appearance="ghost"
            onClick={() => history.push("/speakers/4")}
          >
            SEE PRODUCT
          </Button>
        </div>
      </FlexboxGrid.Item>

      {/* 3 */}
      <FlexboxGrid.Item
        className="ns-mosaic-item"
        id="yx1-img"
        style={{
          backgroundImage:
            "url('/assets/home/desktop/image-earphones-yx1.jpg')",
        }}
        as={Col}
        colspan={24}
        md={12}
      ></FlexboxGrid.Item>

      <FlexboxGrid.Item
        as={Col}
        colspan={24}
        md={1}
        mdHide={true}
      ></FlexboxGrid.Item>

      <FlexboxGrid.Item
        className="ns-mosaic-item"
        id="yx1"
        as={Col}
        colspan={24}
        md={11}
      >
        <h3 style={{ marginBottom: "2rem" }}>YX1 EARPHONES</h3>

        <Button appearance="ghost" onClick={() => history.push("/speakers/4")}>
          SEE PRODUCT
        </Button>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default ProductMosaic;
