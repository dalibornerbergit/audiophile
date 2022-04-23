import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="ns-footer">
      <div id="orange-rectangle"></div>

      <div className="footer-content">
        <div className="footer-nav">
          <div className="footer-nav-left">audiophile</div>

          <div className="footer-nav-right">
            <div className="footer-nav-item">HOME</div>
            <div className="footer-nav-item">HEADPHONES</div>
            <div className="footer-nav-item">SPEAKERS</div>
            <div className="footer-nav-item">EARPHONES</div>
          </div>
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
