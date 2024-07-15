import { useState, useCallback } from "react";
import Count from "./components/Count";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );

  return (
    <>
      <h1>Count: {count}</h1>
      <Count onIncrease={handleIncrease} />
    </>
  );
}
