import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Use State Example </h1>
      <h1>{count} </h1>
      <button onClick={Increment}>Click</button>
    </div>
  );
}
