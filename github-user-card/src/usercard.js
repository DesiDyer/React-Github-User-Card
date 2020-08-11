import React from "react";
import Follower from "./follower";
import "./usercard.css";

const UserCard = (props) => {
  return (
    <div className="container">
      <div className="ui card">
        <div className="image">
          <img src={props.userData.avatar_url} alt="avatar" />
        </div>
        <div className="content">
          <a className="header">{props.userData.name}</a>
          <div className="meta">
            <span className="date">
              Created Account {props.userData.created_at}
            </span>
          </div>
          <div className="description">
            Username: {props.userData.login}
            <br />
            Location: {props.userData.location}
          </div>
        </div>
        <div className="extra content">
          <i className="user icon"></i>
          {props.userData.followers} followers
          <div className="ui list">
            {props.followerData &&
              props.followerData.map((follower) => (
                <Follower key={follower.id} follower={follower} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
