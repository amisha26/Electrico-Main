import React, { useState } from "react";
import "../styles/Part.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Form from "./Form";
import { Button } from "react-bootstrap";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const Open = () => {
    setOpen(true);
  };

  const Close = () => {
    setOpen(false);
  };

  return (
    // ******************** css in (Part.css) ***********************

    <div className="side-main">
      <ul>
        {/********* Anchorlink for smooth scroll **********/}
        <AnchorLink href="#about">
          <li className="btn-items">
            <button id="btn-sidebar">About</button>
          </li>
        </AnchorLink>
        <AnchorLink href="#services" offset="100">
          <li className="btn-items">
            <button id="btn-sidebar">Services</button>
          </li>
        </AnchorLink>
        <AnchorLink href="#contact" offset="100">
          <li className="btn-items">
            <button id="btn-sidebar">Contact Us</button>
          </li>
        </AnchorLink>
      </ul>
      <li className="btn-book">
        {/************ popup model here ***************/}
        <div style={styles}>
          <Button id="btn-sidebar1" onClick={Open}>
            Book Electrical Service
          </Button>
          <Modal open={open} onClose={Close}>
            <Form />
          </Modal>
        </div>
        {/************ popup model here **************/}
      </li>
    </div>
  );
};

export default Header;
