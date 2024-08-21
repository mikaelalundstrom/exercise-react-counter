import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <section className="buttons">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="add"
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          className="sub"
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
          className="reset"
        >
          Reset
        </button>
      </section>
    </>
  );
}

export default App;
