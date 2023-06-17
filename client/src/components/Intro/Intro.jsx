import React from "react";
import "./style.css";
import { IntroData } from "@/src/json/IntroData";

const Intro = () => {
  return (
    <>
      <div className="intro_section">
        <div className="intro_txt">
          <h1>The Only Web Agency You’ll Ever Need.</h1>
          <div>
            <button className="contact_btn transition">Contact Us</button>
          </div>
        </div>
        <div className="intro_para">
          <p>
            <IntroData />
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
