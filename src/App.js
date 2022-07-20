import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const Operators = ["+", "-", "x", "÷", "."];
  const addInput = (val) => {
    // Checks if there is not symbols in the empty screen or in the last digit
    if (
      (Operators.includes(val) && input === "") ||
      (Operators.includes(val) && Operators.includes(input.slice(-1)))
    ) {
      return;
    }
    setInput(input + val);
  };
  const calcResult = () => {
    const fixedInput = input.replace(/x/, "*").replace(/÷/, "/");
    const lastChar = fixedInput.slice(-1)
    if (fixedInput && !isNaN(lastChar)) {
      setInput(evaluate(fixedInput).toString());
    } else {
      return
    }
  };
  return (
    <div className="App">
      <div className="container-calc">
        <Screen digits={input} />
        <div className="fila">
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>÷</Button>
        </div>
        <div className="fila">
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>x</Button>
        </div>
        <div className="fila">
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={calcResult}>=</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className="fila">
          <ButtonClear
            manageClear={() => {
              setInput("");
            }}
          >
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
