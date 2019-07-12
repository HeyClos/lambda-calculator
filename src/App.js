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
  
  function handler(button, type) {
    console.log(button)
    console.log(typeof(button))
    if (typeof(button)==="number"){
      if (mathOp===""){
        setFirstNum(firstNum + button);
        setDisplay(firstNum + button)
      } else {
        setSecondNum(secondNum + button)
        setDisplay(firstNum + mathOp + secondNum + button)
      }
    }
    if (type === "op" && button !== "=") {
      setMathOp(button)
      setDisplay(firstNum + button)
    }
    if (button === "=") {
      let result = "123"
      let num1 = parseInt(firstNum,10);
      let num2 = parseInt(secondNum,10);
      if (mathOp === '*') result = num1*num2;
      if (mathOp === '/') result = num1/num2;
      if (mathOp === '+') result = num1+num2;
      if (mathOp === '-') result = num1-num2;
      setDisplay(result);
    }
    
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
