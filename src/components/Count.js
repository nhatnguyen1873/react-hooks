import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount(() => count + 5);
    setCount((prevCount) => prevCount + 1);
    setCount(count + 2);
    setCount((prevCount) => prevCount + 3);
    setCount(() => count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </>
  );
}
