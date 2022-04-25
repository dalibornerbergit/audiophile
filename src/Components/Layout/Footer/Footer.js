// import { useContext } from "react";
// import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Nav, FlexboxGrid, Col } from "rsuite";
import { useHistory } from "react-router-dom";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";

import "./Footer.css";

const Footer = () => {
  // const { isMobile } = useContext(GlobalContext);

  const history = useHistory();

  return (
    <footer className="ns-footer">
      <div id="orange-rectangle"></div>

      <div className="footer-content">
        <FlexboxGrid>
          <FlexboxGrid.Item
            as={Col}
            colspan={24}
            md={12}
            className="footer-item footer-nav-brand"
          >
            <div onClick={() => history.push("/")}>audiophile</div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={12}>
            <Nav className="footer-item footer-nav-right">
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
            </Nav>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item
            className="footer-item"
            as={Col}
            colspan={24}
            md={12}
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            className="footer-item"
            as={Col}
            colspan={24}
            md={12}
          >
            <div className="footer-icons">
              <div className="footer-icon">
                <a href="https://www.nsoft.com/">
                  <FacebookIcon />
                </a>
              </div>
              <div className="footer-icon">
                <a href="https://www.nsoft.com/">
                  <TwitterIcon />
                </a>
              </div>
              <div className="footer-icon">
                <a href="https://www.nsoft.com/">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item className="footer-item" as={Col} colspan={24}>
            Copyright 2021. All Rights Reserved
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </footer>
  );
};
export default Footer;
