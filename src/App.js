import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(4);

  const decremeantCount = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    console.log(count);
  };
  const incremeantCount = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);

    console.log(count);
  };

  return (
    <div className="App">
      <button onClick={decremeantCount}>-</button>
      <span>{count}</span>
      <button onClick={incremeantCount}>+</button>
    </div>
  );
}
