import React from "react";

export default function ProfileImage(props) {
    return (
        <div>
            <img src={props.image} alt="profileImage" className="profile"/>
        </div>
    )

}