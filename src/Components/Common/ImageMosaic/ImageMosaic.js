import { FlexboxGrid, Col } from "rsuite";

import "./ImageMosaic.css";

const ImageMosaic = ({ item }) => {
  return (
    <FlexboxGrid className="ns-img-mosaic">
      <FlexboxGrid.Item as={Col} colspan={24} md={12}>
        <FlexboxGrid>
          <FlexboxGrid.Item className="ns-img-mosail-img" as={Col} colspan={24}>
            <img
              src={`/assets/product-${item.slug}/desktop/image-gallery-1.jpg`}
              alt="X"
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item className="ns-img-mosail-img" as={Col} colspan={24}>
            <img
              src={`/assets/product-${item.slug}/desktop/image-gallery-2.jpg`}
              alt="X"
            />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        className="ns-img-mosail-img"
        as={Col}
        colspan={24}
        md={12}
      >
        <img
          src={`/assets/product-${item.slug}/desktop/image-gallery-3.jpg`}
          alt="X"
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default ImageMosaic;
