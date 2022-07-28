import React from "react";
import Actions from "../components/Actions.jsx";
import Message from "../components/Message.jsx";
import ProfileImage from "../components/ProfileImage.jsx";
import Timestamp from "../components/Timestamp.jsx";
import User from "../components/User.jsx";


function Tweet(props) {
  return (
    
    <div className="tweet">
  
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User userInfo={props.tweet.user}/>
            <Timestamp time={props.tweet.timestamp} />
          </span>
        </div>

        <Message message = {props.tweet.message}/>
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
