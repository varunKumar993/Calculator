import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(" ");

  const calculateResult = () => {
  try {
    const operators = ['+', '-', '*', '/', '%'];
    let operator = null;

    for (let i = 0; i < input.length; i++) {
      if (operators.includes(input[i])) {
        operator = input[i];
        break;
      }
    }

    if (!operator) {
      setInput(parseFloat(input).toString());
      return;
    }

    const [operand1, operand2] = input.split(operator).map((num) => parseFloat(num));
    let result;

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand2 !== 0 ? operand1 / operand2 : "Error";
        break;
      case '%':
        result = operand1 % operand2;
        break;
      default:
        throw new Error("Invalid operator");
    }

    setInput(result.toString());
  } catch (error) {
    setInput("Error");
  }
};

  const handleclick = (value) => {
    if (value === "c") {
      setInput("");
    } else if (value === "<") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      calculateResult(input);
    } else {
      setInput((prevValue) => prevValue + value);
    }
  };
  return (
    <>
      <div>
        <h1>{input}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            handleclick("c");
          }}
        >
          c
        </button>
        <button
          onClick={() => {
            handleclick("<");
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            handleclick("%");
          }}
        >
          %
        </button>
        <button
          onClick={() => {
            handleclick("/");
          }}
        >
          /
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleclick("7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            handleclick("8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            handleclick("9");
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            handleclick("*");
          }}
        >
          *
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleclick("4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            handleclick("5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            handleclick("6");
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            handleclick("-");
          }}
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleclick("1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            handleclick("2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            handleclick("3");
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            handleclick("+");
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleclick("0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            handleclick("00");
          }}
        >
          00
        </button>
        <button
          onClick={() => {
            handleclick(".");
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            handleclick("=");
          }}
        >
          =
        </button>
      </div>
    </>
  );
}

export default App;
