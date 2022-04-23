import { FlexboxGrid, Col, Button } from "rsuite";
import ZX9Speaker from "./image-speaker-zx9.png";

import "./ProductMosaic.css";

const ProductMosaic = () => {
  return (
    <div className="ns-mosaic-item">
      <FlexboxGrid>
        <FlexboxGrid.Item as={Col} colspan={24}>
          <div id="zx9" className="ns-mosaic-item">
            <FlexboxGrid>
              <FlexboxGrid.Item as={Col} colspan={24} md={12}>
                <img src={ZX9Speaker} alt="X" />
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

                  <Button>SEE PRODUCT</Button>
                </div>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item as={Col} colspan={24}>
          <div id="zx7" className="ns-mosaic-item">
            <FlexboxGrid>
              <FlexboxGrid.Item
                className="speaker-info"
                as={Col}
                colspan={24}
                md={12}
              >
                <div>
                  <h3 style={{ marginBottom: "2rem" }}>ZX7 SPEAKER</h3>

                  <Button>SEE PRODUCT</Button>
                </div>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item as={Col} colspan={24} md={12}>
          <div id="yx1-img" className="ns-mosaic-item"></div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item as={Col} colspan={24} md={12}>
          <div id="yx1" className="ns-mosaic-item">
            <h3 style={{ marginBottom: "2rem" }}>ZX7 SPEAKER</h3>

            <Button>SEE PRODUCT</Button>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default ProductMosaic;
