import { useHistory } from "react-router-dom";
import { FlexboxGrid, Col } from "rsuite";
import ArrowRightIcon from "./ArrowRightIcon";

import "./Menu.css";

const Menu = () => {
  const history = useHistory();

  const categories = [
    {
      name: "HEADPHONES",
      link: "/speakers",
      img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    },
    {
      name: "SPEAKERS",
      link: "/speakers",
      img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    },
    {
      name: "HEADPHONES",
      link: "/earphones",
      img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    },
  ];

  return (
    <div className="ns-menu">
      <FlexboxGrid justify="space-between">
        {categories.map((category, i) => (
          <FlexboxGrid.Item key={i} as={Col} colspan={24} sm={8}>
            <div
              className="ns-menu-item"
              onClick={() => history.push(category.link)}
            >
              <img src={category.img} alt="X" />
              <p>{category.name}</p>

              <p>
                SHOP <ArrowRightIcon />
              </p>
            </div>
          </FlexboxGrid.Item>
        ))}
      </FlexboxGrid>
    </div>
  );
};

export default Menu;
