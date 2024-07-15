import { memo } from "react";

function Count({ onIncrease }) {
  console.log("render Count");
  return <button onClick={onIncrease}>Increase</button>;
}

export default memo(Count);
