import { memo } from "react";

function ShowTime({ second }) {
  console.log("render ShowTime");
  return <h1>Time: {second}</h1>;
}

export default memo(ShowTime);
