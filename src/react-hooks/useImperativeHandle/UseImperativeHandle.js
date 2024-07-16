import { useRef, memo } from "react";
import Video from "./components/Video";

function UseImperativeHandle() {
  const ref = useRef();

  const handlePlayVideo = () => {
    ref.current.play();
  };

  const handlePauseVideo = () => {
    ref.current.pause();
  };

  return (
    <>
      <Video ref={ref} />
      <button onClick={handlePlayVideo}>Play</button>
      <button onClick={handlePauseVideo}>Pause</button>
    </>
  );
}

export default memo(UseImperativeHandle);
