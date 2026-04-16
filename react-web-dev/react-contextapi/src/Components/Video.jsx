import { useRef, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Video() {
    const ref = useRef(null)    
    const theme = useContext(ThemeContext)

    const handlePlay = () => {
        return ref.current.play();
    }
    
    const handlePause = () => {
        return ref.current.pause();
    }

    return (
        <div style={{backgroundColor:theme.color}}>
            <h1>Welcome to my Website</h1>
            <video
            ref={ref}
            controls
            src = "video.mp4"
            ></video>
            <hr />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
}