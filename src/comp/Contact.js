import React from "react";
import "../styles/Contact.css";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";

function Contact() {
  return (
    <div className="contacts" id="contact">
      <h1 class="contact-head">
        <span>Contact</span> Us
      </h1>
      <div className="icon-area">
        <div className="val contact-icon">
          <ul id="cnt-main">
            <li id="cnt-in">
              <GrLocation  id="cnt-icon" />
            </li>
            <li id="cnt-in">
              <h2 id="cnt-text">Address</h2>
            </li>
            <li id="cnt-in">
              <h2>18, Richmond,TX-8080</h2>
            </li>
          </ul>
        </div>

        <div className="val phone1-icon">
          <ul id="cnt-main">
            <li id="cnt-in">
              <FiPhone   id="cnt-icon" />
            </li>
            <li id="cnt-in">
              <h2 id="cnt-text">Phone</h2>
            </li>
            <li id="cnt-in">
              <h2>303.428.2011 phone</h2>
            </li>
          </ul>
        </div>

        <div className="val mail-icon">
          <ul id="cnt-main">
            <li id="cnt-in">
              <RiMessage2Line   id="cnt-icon" />
            </li>

            <li id="cnt-in">
              <h2 id="cnt-text">Email</h2>
            </li>
            <li id="cnt-in">
              <h2>info@electrico.com</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
