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
            {/* <h1>
              <span>Best Option in Electrical Contractors 24/7</span>
            </h1> */}
            <br/>
            <p>
              All of our services are backed by our 100% satisfaction guarantee.
              Our electricians can install anything from new security lighting
              for your outdoors to a whole home generator that will keep your
              appliances working during a power outage.
              <br />
              <br />
              Our experienced electricians are highly trained in all aspects of
              electrical service, from office lighting and security systems to
              emergency repair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
