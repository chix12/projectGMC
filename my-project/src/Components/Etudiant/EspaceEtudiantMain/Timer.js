import React from "react";
import './Timer.css'


const Time = minutes => {  

    let minToSeconds = minutes * 60
    let secondsToMs = minToSeconds * 60

    let seconds = Math.floor(minutes % 60)
    
    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );
};

const Timer = ({ minutes }) => {
    return (
        <div className="time-container">
            <div className="time-inner-container">
                <div className="time-digits">{Time(minutes)}</div>
            </div>
        </div>
    );
};

export default Timer;
