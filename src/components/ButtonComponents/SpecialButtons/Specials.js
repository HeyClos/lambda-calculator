import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { specials } from '../path/to/data';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [mySpecials, setSpecial] = useState(specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       }
       {mySpecials.map(num => <button> {num}</button>)}
    </div>
  );
};