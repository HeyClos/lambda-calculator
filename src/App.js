import React from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import NumberButton from "../src/components/ButtonComponents/NumberButtons/NumberButton"
import OperatorButtton from "../src/components/ButtonComponents/OperatorButtons/OperatorButton"
import SpecialButton from "../src/components/ButtonComponents/SpecialButtons/SpecialButton"

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display"

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  // could hold everything in a string and then evaluate it.
  // could set things to different states then add them all together.

  // KEEP ONE PIECE OF DATA IN ONE HOOK
  //!! What am i beling asked to do? Are there specific words
  // in step 5 that are hints or should be triggering specific 
  // memories to what i need to do?

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Logo />
      <Display />
      <div className="App">
        <NumberButton />
        <OperatorButtton />
        <SpecialButton />
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
