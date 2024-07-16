import "./App.css";
import { useState, useCallback } from "react";
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <Count onIncrease={handleIncrease} />
    </div>
  );
}

export default App;
