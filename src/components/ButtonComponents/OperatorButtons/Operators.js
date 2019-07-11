import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../path/to/data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [myOperators, setOperator] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {myOperators.map(num => <button> {num} </button>)}
    </div>
  );
};