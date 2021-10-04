import React from "react";
import "./footer.css";
import twitter from "../../assets/images/twitter.png";
import telegram from "../../assets/images/telegram.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <a href="/">Smart Contact</a>
      </div>
      <div className="footer-down">
        <a href="/">
          <img src={twitter} alt="" />
        </a>
        <a href="/">
          <img src={telegram} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
