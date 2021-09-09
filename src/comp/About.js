import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="main-about">
      {/****** css in About.css **********/}

      <div className="about" id="about">
        <div className="about-head">
          <h1>
            <span className="about-top">WHY</span> ELECTRICO ?
          </h1>
        </div>
        <div className="about-area">
          <div className="about-img">
            <img
              className="about-img-cls"
              alt="none"
              src="./images/about.jpg"
            />
          </div>
          <div className="about-text">
            <h1>
              <span>Name xyz</span>
            </h1>
            <p>
              All of our services are backed by our 100% satisfaction guarantee.
              Our electricians can install anything from new security lighting
              for your outdoors to a whole home generator that will keep your
              appliances working during a power outage.
              <br />
              <br />
              Vivamus suscipit tortor eget felis porttitor volutpat. Neque porro
              quisquam est, qui dolorem ipsum quia dolor , sed quia non numquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
