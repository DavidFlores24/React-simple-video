import React, {useRef} from 'react';
import "./App.css"; // import css
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

function App() {
    let playerRef = useRef();

    return (
        <>
            <button
                autoFocus
                style={{width: "100px", height: "50px"}}
                onClick={() => {
                    console.log("clicked");
                    if(playerRef.current) {
                        console.log("playing the video")
                        playerRef.current?.play();
                    } else {
                        console.error("Videoplayer didn't load");
                    }
                }}
            />
            <video
                ref={playerRef}
                autoPlay={true}
                muted
                controls={true}
                width={1920}
                height={1080}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </>
    );
}

root.render(<App tab="home" />);
