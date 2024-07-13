import { useState } from "react";
import StopWatch from "./components/StopWatch";

export default function UseRef() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle((prevToggle) => !prevToggle)}>
        Toggle
      </button>
      {toggle && <StopWatch />}
    </>
  );
}
