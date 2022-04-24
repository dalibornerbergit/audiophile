import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "rsuite";
import CartIcon from "./CartIcon";

import "./Header.css";

const Header = () => {
  const history = useHistory();

  const { isMobile } = useContext(GlobalContext);
  const { total } = useContext(CartContext);

  return (
    <Navbar className="ns-navbar">
      <Nav className="ns-nav">
        <Nav.Item onClick={() => history.push("/")} className="ns-navbar-brand">
          <b>audiophile</b>
        </Nav.Item>
        {!isMobile && (
          <div>
            <Nav.Item onClick={() => history.push("/")}>HOME</Nav.Item>
            <Nav.Item onClick={() => history.push("/speakers")}>
              HEADPHONES
            </Nav.Item>
            <Nav.Item onClick={() => history.push("/speakers")}>
              SPEAKERS
            </Nav.Item>
            <Nav.Item onClick={() => history.push("/earphones")}>
              EARPHONES
            </Nav.Item>
          </div>
        )}
        <Nav.Item onClick={() => history.push("/cart")}>
          <span>{total}</span>
          <CartIcon />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Header;
