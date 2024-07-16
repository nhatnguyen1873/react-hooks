import "./App.css";
import { useState, useEffect, useRef } from "react";
import ShowTime from "./components/ShowTime";
import ShowCount from "./components/ShowCount";

function App() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [second, setSecond] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      setSecond(0);
      setCount(0);
      setIsRunning(false);
    };
  }, [toggle]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecond((prevSecond) => prevSecond + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div className="App">
      <button onClick={() => setToggle((prevToggle) => !prevToggle)}>
        Toggle
      </button>
      {toggle && (
        <>
          <ShowCount count={count} />
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Increase
          </button>
          <ShowTime second={second} />
          <button
            onClick={() => setIsRunning((prevIsRunning) => !prevIsRunning)}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
