import "./App.css";
import { useState } from "react";
import Count from "./components/Count";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle((prevToggle) => !prevToggle)}>
        Toggle
      </button>
      {toggle && <Count />}
    </div>
  );
}

export default App;
