import React from "react";

export default function User(props) {
    return (
        <span className="user">
            <span className="name" >{props.userInfo.name}</span>
            <span className="handle">{props.userInfo.handle}</span>
        </span>
    )
}