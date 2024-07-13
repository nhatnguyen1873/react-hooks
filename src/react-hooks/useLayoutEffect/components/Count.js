import { useState, useLayoutEffect } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
    </>
  );
}
