import React from "react";
import XPlayerIcon from "../assets/svg/PlayerX";
import OPlayerIcon from "../assets/svg/PlayerO";

import { connect } from "react-redux";
import { 
  setTie,
  setGameOver, 
  setField,
  reversPlayers
} from "../services/reducers/gameSlice";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
      ],
    };

    this.winCheck = this.winCheck.bind(this)
  }

  async setFieldValue(key) {
    if (this.props.gameOver) {
      return false;
    }

    await this.props.setField(key)

    if (this.winCheck()) {
      this.props.setGameOver(true)
      this.props.incWinsCount(this.props.tempPlayers[0])
      return;
    }

    if (this.isTie()) {
      this.props.setGameOver(true)
      this.props.setTie(true)
      return;
    }

    this.props.reversPlayers()
  }

  winCheck() {
    let win = false
    let combinations = this.getCombinationsByPlayer()

    for (let index = 0; index < this.state.winCombinations.length; index++) {
      const winCombination = this.state.winCombinations[index]
      
      if (winCombination.every(item => combinations.includes(item))) {
        return true
      }
    }
    
    return win
  }

  getCombinationsByPlayer() {
    let combinations = []

    this.props.fields.forEach((value, key) => {
        if (this.props.tempPlayers[0] == value) {
            combinations.push(key)
        }
    })

    return combinations
  }

  isTie() {
    return this.props.fields.filter(
        item => item == ""
    ).length == 0
  }

  render() {
    const fields = this.props.fields;
    const players = this.props.players;

    return (
      <section className="table">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        {fields.map((field, index) => {
          return (
            <div
              className="field"
              key={index}
              onClick={this.setFieldValue.bind(this, index)}
            >
              {field == players[0].name && <XPlayerIcon />}
              {field == players[1].name && <OPlayerIcon />}
            </div>
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fields: state.game.fields,
    gameOver: state.game.gameOver,
    tempPlayers: state.game.tempPlayers,
  };
};

const mapDispatchToProps = {
  setTie,
  setGameOver,
  setField,
  reversPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
