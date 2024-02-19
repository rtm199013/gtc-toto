import React from "react";

class Players02 extends React.Component {
  render() {
    return (
      <div>
        STATE-LESS
        <ul>
          <li>Name: {this.props.playerName}</li>
          <li>Number: {this.props.playerNum}</li>
        </ul>
      </div>
    );
  }
}

export default Players02;
