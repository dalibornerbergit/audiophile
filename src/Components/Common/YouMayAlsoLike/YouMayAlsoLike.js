import { useHistory } from "react-router-dom";
import { FlexboxGrid, Col, Button } from "rsuite";
// import Headphones from "./image-category-thumbnail-headphones.png";
// import Speakers from "./image-category-thumbnail-speakers.png";
// import Earphones from "./image-category-thumbnail-earphones.png";

import data from "../../../data.json";

import "./YouMayAlsoLike.css";

const YouMayAlsoLike = () => {
  const history = useHistory();

  return (
    <div className="ns-ymal">
      <h3 style={{ marginBottom: "2rem" }}>YOU MAY ALSO LIKE</h3>

      <FlexboxGrid className="ns-ymal" justify="space-between">
        {data.slice(0, 3).map((item, i) => (
          <FlexboxGrid.Item key={i} as={Col} colspan={24} sm={8}>
            <div className="ns-ymal-item">
              <img
                src={`/assets/product-${item.slug}/desktop/image-product.jpg`}
                alt="X"
              />
            </div>

            <div className="ns-ymal-item-text">
              <h5 style={{ marginBottom: "1rem" }}>
                {item.name.toUpperCase()}
              </h5>

              <Button
                style={{ marginBottom: "1rem" }}
                onClick={() => history.push(`/${data[i].category}/${i}`)}
              >
                SEE PRODUCT
              </Button>
            </div>
          </FlexboxGrid.Item>
        ))}
      </FlexboxGrid>
    </div>
  );
};

export default YouMayAlsoLike;
