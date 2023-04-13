import React from "react";
import Header from "./Header";
import Table from "./Table";
import VictoryScore from "./VictoryScore";

import { connect } from "react-redux";
import { setTempPlayers } from "../services/reducers/gameSlice";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [
        {
          name: "X",
          winsCount: 0,
        },
        {
          name: "O",
          winsCount: 0,
        },
      ]
    }

    this.incWinsCount = this.incWinsCount.bind(this)
  }

  incWinsCount(playerName) {
    let players = this.state.players
    players.filter(player => {
      if (player.name != playerName) {
        return
      }
      player.winsCount++;
    });
    this.setState({players})
  }

  componentDidMount() {
    this.props.setTempPlayers(this.state.players)
  }

  render() {
    return (
      <div className="game">
        <Header players={this.state.players}/>
        <Table 
          players={this.state.players}
          incWinsCount={this.incWinsCount}
        />
        <VictoryScore players={this.state.players}/>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setTempPlayers,
};

export default connect(null, mapDispatchToProps)(Game);
