import React from "react";

const Follower = (props) => {
  return (
    // <a className="ui blue image label">
    //   <img src={props.follower.avatar_url} />
    //   {props.follower.login}
    //   <div className="detail">Follower</div>
    // </a>
    <div className="item">
      <img className="ui avatar image" src={props.follower.avatar_url} />
      <div className="content">
        <a className="header">{props.follower.login}</a>
      </div>
    </div>
  );
};

export default Follower;
