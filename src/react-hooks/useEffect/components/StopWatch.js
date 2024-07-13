import { useState, useEffect } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  return <h1>Time count: {time} seconds</h1>;
}
