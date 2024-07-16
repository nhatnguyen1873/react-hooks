import "./App.css";
import { useRef } from "react";
import Video from "./components/Video";

function App() {
  const ref = useRef();

  const handlePlayVideo = () => {
    ref.current.play();
  };

  const handlePauseVideo = () => {
    ref.current.pause();
  };

  return (
    <div className="App">
      <Video ref={ref} />
      <button onClick={handlePlayVideo}>Play</button>
      <button onClick={handlePauseVideo}>Pause</button>
    </div>
  );
}

export default App;
