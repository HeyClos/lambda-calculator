import React, {useState} from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import {NumberButton} from "../src/components/ButtonComponents/NumberButtons/NumberButton"
import {OperatorButton} from "../src/components/ButtonComponents/OperatorButtons/OperatorButton"
import {SpecialButton} from "../src/components/ButtonComponents/SpecialButtons/SpecialButton"

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import {Display} from "./components/DisplayComponents/Display"

function App() {
 
  const [display, setDisplay] = useState(0);
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [mathOp, setMathOp] = useState("");
  
  function handler(button) {
    console.log(button)
  }

  return (
    <div className="container">
      <Logo />
      <Display display={display} />

      <div className="App">
        <NumberButton handler={handler} />
        <OperatorButton handler={handler} />
        <SpecialButton handler={handler} />
      </div>
    </div>
  );
}

export default App;
