import React from "react";
import XPlayerIcon from "../assets/svg/PlayerX";
import OPlayerIcon from "../assets/svg/PlayerO";

class VictoryScore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const players = this.props.players;
    return (
      <section className="victory-score">
        <p>Рахунок</p>

        <div>
          <div>
            <XPlayerIcon />
            <span>{players[0].winsCount}</span>
          </div>
          <div>
            <OPlayerIcon />
            <span>{players[1].winsCount}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default VictoryScore;
