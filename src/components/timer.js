import React from "react";

function Timer (props) {
    return(
        <div className="container">
            <div className="counter">{props.counter}</div>
            <button className="stop" onClick={props.onClick}>{props.status}</button>
        </div>
    )

}

export default Timer;
