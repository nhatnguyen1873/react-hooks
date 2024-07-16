import { useState, useRef, useEffect } from "react";

export default function StopWatch() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [counts, setCounts] = useState([]);
  const intervalRef = useRef();

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleStart = () => {
    if (!isCounting) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIsCounting(true);
    }
  };
  const handleCount = () => {
    if (isCounting) {
      setCounts((prevCounts) => [...prevCounts, count]);
    }
  };
  const handleStop = () => {
    if (isCounting) {
      clearInterval(intervalRef.current);
      setIsCounting(false);
      setCounts((prevCounts) => [...prevCounts, count]);
    }
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsCounting(false);
    setCount(0);
    setCounts((prevCounts) => (prevCounts.length > 0 ? [] : prevCounts));
  };

  return (
    <>
      <h1>{count}</h1>
      <button disabled={isCounting} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isCounting} onClick={handleCount}>
        Count
      </button>
      <button disabled={!isCounting} onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
      {counts.length > 0 && (
        <ul>
          {counts.map((count, index) => (
            <li key={index}>{count}</li>
          ))}
        </ul>
      )}
    </>
  );
}
