// import { useContext } from "react";
// import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Nav } from "rsuite";
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
        <div className="footer-nav">
          <div className="footer-nav-left">audiophile</div>

          <Nav className="footer-nav-right">
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
        </div>

        <div className="footer-nav-text">
          <div className="footer-nav-paragraph">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </div>

          <div className="footer-nav-icons">
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
        </div>

        <p style={{ paddingTop: "2rem" }}>
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
