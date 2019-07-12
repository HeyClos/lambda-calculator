import React from "react";
import {Operators} from "./Operators"

export const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
      <Operators handler={props.handler} />
      </button>
    </>
  );
};
