import "./App.css";
import { useState } from "react";
import StopWatch from "./components/StopWatch";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle((prevToggle) => !prevToggle)}>
        Toggle
      </button>
      {toggle && <StopWatch />}
    </div>
  );
}

export default App;
