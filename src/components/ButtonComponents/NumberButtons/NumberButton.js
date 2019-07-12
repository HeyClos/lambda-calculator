import React from "react";
import {Numbers} from "./Numbers"

export const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
      <Numbers handler={props.handler}/>
      </button>
    </>
  );
};
