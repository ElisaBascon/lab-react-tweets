import React from "react";

export default function Timestamp(props) {
    return (
        <span>
            <span className="timestamp">{props.time}</span>
        </span>
    )
}