import React from "react";

class Players extends React.Component {
  render() {
    return (
      <div>
        STATEFULL
        <ul>
          {this.props.playerList.map((player) => {
            return (
              <li>
                Name: {player.name}
                Num: {player.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Players;
