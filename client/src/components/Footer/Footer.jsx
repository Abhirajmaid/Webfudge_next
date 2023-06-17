"use client";

//# styles
import "./style.css";

//# imports
import { Icon } from "@iconify/react";

//# components
import FooterMenu from "@src/components/Menu/FooterMenu";
import LegalMenu from "@src/components/Menu/LegalMenu";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_logo">
          <a href="/">
            <img src="/" alt="webfudge" />
          </a>
        </div>
        <p>
          A full service Social Media Agency to
          <br />{" "}
          <span style={{ color: "var(--prime" }}>Grow from Scratch!</span>
        </p>
        <div className="menu_section">
          <FooterMenu />
        </div>
        <div className="menu_section">
          <ul className="social_menu">
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:linkedin-fill" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:instagram-fill" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:youtube-fill" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:twitter-fill" />
              </a>
            </li>
          </ul>
        </div>
        <span className="footer_divider"></span>
        <div className="footer_base">
          <p>
            Copyright ©2022. WebFudge Influencer Agency. All rights reserved.
          </p>
          <div>
            <LegalMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
