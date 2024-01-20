import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        Toggle Theme
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;
