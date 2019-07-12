import React from "react";
import {Specials} from "./Specials"

export const SpecialButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Specials handler={props.handler} />
    </button>
  );
};
