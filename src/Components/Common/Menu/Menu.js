import { useHistory } from "react-router-dom";
import { FlexboxGrid, Col } from "rsuite";
import Headphones from "./image-category-thumbnail-headphones.png";
import Speakers from "./image-category-thumbnail-speakers.png";
import Earphones from "./image-category-thumbnail-earphones.png";
import ArrowRightIcon from "./ArrowRightIcon";

import "./Menu.css";

const Menu = () => {
  const history = useHistory();

  return (
    <div className="ns-menu">
      <FlexboxGrid justify="space-between">
        <FlexboxGrid.Item as={Col} colspan={24} md={8}>
          <div
            className="ns-menu-item"
            onClick={() => history.push("/speakers")}
          >
            <img src={Headphones} alt="X" />
            <p>HEADPHONES</p>

            <p>
              SHOP <ArrowRightIcon />
            </p>
          </div>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item as={Col} colspan={24} md={8}>
          <div
            className="ns-menu-item"
            onClick={() => history.push("/speakers")}
          >
            <img src={Speakers} alt="X" />
            <p>SPEAKERS</p>

            <p>
              SHOP <ArrowRightIcon />
            </p>
          </div>
        </FlexboxGrid.Item>
        
        <FlexboxGrid.Item as={Col} colspan={24} md={8}>
          <div
            className="ns-menu-item"
            onClick={() => history.push("earphones")}
          >
            <img src={Earphones} alt="X" />
            <p>EARPHONES</p>

            <p>
              SHOP <ArrowRightIcon />
            </p>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
};

export default Menu;
