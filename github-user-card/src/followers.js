import React from "react";
import Follower from "./follower";

const Followers = (props) => {
  return (
    <div className="ui list">
      {props.followerData.map((follower) => (
        <Follower key={follower.id} follower={follower} />
      ))}
    </div>
  );
};

export default Followers;
