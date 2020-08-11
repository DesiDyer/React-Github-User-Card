import React from "react";
import axios from "axios";
import UserCard from "./usercard";
import Followers from "./followers";

class App extends React.Component {
  constructor() {
    super();

    this.state = { userData: {}, followerData: [] };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/DesiDyer")
      .then((res) => {
        this.setState({ userData: res.data });
        console.log(this.state);
      })
      .catch((err) => console.dir(err));

    axios
      .get("https://api.github.com/users/DesiDyer/followers")
      .then((res) => {
        this.setState({ followerData: res.data });
        console.log(this.state);
      })
      .catch((err) => console.dir(err));
  }

  render() {
    return (
      <div>
        <UserCard
          userData={this.state.userData}
          followerData={this.state.followerData}
        />

        {/* <Followers followerData={this.state.followerData} /> */}
      </div>
    );
  }
}

export default App;
