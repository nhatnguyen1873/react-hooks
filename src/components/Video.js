import { forwardRef, useImperativeHandle, useRef, memo } from "react";
import video from "../videos/Download.mp4";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return (
    <>
      <video ref={videoRef} width={300} src={video} />
    </>
  );
}

export default memo(forwardRef(Video));
