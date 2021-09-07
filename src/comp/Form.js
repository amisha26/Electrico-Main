import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../styles/Form.css";
import Loader from "./Loader";

// ********** material-ui style **************

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Form() {
  const classes = useStyles();

  //************  Form values & names *************
  const [value, setValue] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    problem: "",
    appliance: "Fan",
    pincode: "462022",
  });

  //***********  Getting form values & names *************
  const handleInput = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setValue({ ...value, [nam]: val });
  };

  //****************  Form submit  **************
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    let x = value;
    setShow(true);
    // Calling API to submit data

    formSubmit({ x });
  };

  //******************** API Call *************************
  const api = "https://elctro-api.herokuapp.com/api/v1/shop/";

  // user login request
  const formSubmit = ({ x }) => {
    console.log(x);
    fetch(api, {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.data.userId[0]._id);
        let a = json.status;
        //console.log(json);
        if (a === "Ok") success();
        else fail({ json });
      });
  };

  // login is failed
  const fail = ({ json }) => {
    alert(json.message);
    setShow(false);
  };

  // login is successfull
  const success = () => {
    //console.log(y);
    alert("submitted 😄");

    // Loader is hidden
    setShow(false);
    //Clear form
    setValue({
      name: "",
      phoneNumber: "",
      address: "",
      problem: "",
      appliance: "Fan",
      pincode: "462022",
    });
  };

  // Loader  Start

  const [show, setShow] = useState(false);

  // Loader End

  return (
    <form
      className={`form-main ${classes.root}`}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <p id="form-head">Book Electrical Service</p>
      {/******** Name  Start *********/}
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className="form-text"
        name="name"
        onChange={handleInput}
        value={value.name}
        required={true}
      />
      {/******* Name End ***********/}
      {/********** Phone-Number Start *********/}
      <TextField
        id="outlined-basic"
        label="Phone-No"
        pattern="[0-9]*"
        variant="outlined"
        name="phoneNumber"
        inputProps={{ maxLength: 10 }}
        type="tel"
        onChange={handleInput}
        value={value.phoneNumber}
        required={true}
      />
      <br />
      {/********* Phone-Number End  *************/}
      {/********** Address Start  ***********/}
      <TextField
        id="outlined-textarea"
        label="Address"
        placeholder="Address"
        variant="outlined"
        multiline
        name="address"
        onChange={handleInput}
        value={value.address}
        required={true}
      />
      {/************ Address End ************/}
      {/************ Problem Start ***********/}
      <TextField
        id="outlined-textarea"
        label="Problem"
        placeholder="Problem"
        variant="outlined"
        multiline
        name="problem"
        onChange={handleInput}
        value={value.problem}
        required={true}
      />
      <br />
      {/*********** Problem End ***************/}

      {/*********** Button Loader Start ***************/}
      {show ? (
        <Loader />
      ) : (
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          style={{
            width: "5rem",
            justifySelf: "center",
          }}
        >
          Submit
        </Button>
      )}
      {/*********** Button Loader End ***************/}
    </form>
  );
}
