import { memo } from "react";

function ShowCount({ count }) {
  console.log("render ShowCount");
  return <h1>Count: {count}</h1>;
}

export default memo(ShowCount);
