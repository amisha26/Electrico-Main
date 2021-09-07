import "../styles//Part.css";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Form from "./Form";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const Main = () => {
  const [open, setOpen] = useState(false);

  const Open = () => {
    setOpen(true);
  };

  const Close = () => {
    setOpen(false);
  };
  return (
    <div>
      {/****** css in Part.css **********/}
      <div className="img-2">
        <img className="slider-img" src="./images/c.jpg" alt="slider" />
        <div className="left-hover"></div>
        <div className="hover-text">
          <h1 id="text-main">
            Get the job done <br /> right the first time.
          </h1>
          <h2 className="heading-2" id="text-main">At your service 24/7.</h2>
          <button className="btn-item-2" onClick={Open}>
            Book Electrical Service
          </button>
          {/****** model for popup **********/}
          <Modal open={open} onClose={Close}>
            {/****** form inside model **********/}
            <Form />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Main;
