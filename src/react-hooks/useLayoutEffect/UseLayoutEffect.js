import { useState } from "react";
import Count from "./components/Count";

export default function UseLayoutEffect() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle((prevToggle) => !prevToggle)}>
        Toggle
      </button>
      {toggle && <Count />}
    </>
  );
}
