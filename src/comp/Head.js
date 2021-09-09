import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../styles/Head.css";

const Head = () => {
  return (
    <header className="top">
      <div className="heading-cls img1">
        <h1>
          Electrico<span id="dot">.</span>
        </h1>
      </div>
      <div className="bar-list">
        <div className="phone-icon">
          <FaPhoneAlt className="bar-icon" color="white" />
        </div>
        <div class="vl"></div>
        <div className="list-item">
          Call us at:
          <strong>
            +(91) <span className="head-span">303.428.2011</span>
          </strong>
        </div>
      </div>
    </header>
  );
};

export default Head;
