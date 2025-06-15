import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState();
  return (
    <>
      <div>
        <h1>{input}</h1>
      </div>
      <div>
        <button>c</button>
        <button>&lt;</button>
        <button>%</button>
        <button>/</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div>
        <button>0</button>
        <button>00</button>
        <button>.</button>
        <button>=</button>
      </div>
    </>
  );
}

export default App;
