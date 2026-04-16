import { useRef } from "react";

export default function Video() {
    const ref = useRef(null)

    const handlePlay = () => {
        return ref.current.play();
    }
    
    const handlePause = () => {
        return ref.current.pause();
    }

    return (
        <div>
            <h1>Welcome to my Website</h1>
            <video
            ref={ref}
            controls
            src = "./assets/video.mp4"
            ></video>
            <hr />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
}