import "../assets/css/Header.css";

import React from "react";
import Back from "../assets/svg/Back";
import XPlayerIcon from "../assets/svg/PlayerX";
import OPlayerIcon from "../assets/svg/PlayerO";

import { connect } from "react-redux";
import { gameMode } from "../services/reducers/mainSlice";
import { setTie, setGameOver, clearFields, reversPlayers } from "../services/reducers/gameSlice";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  gameEndText(player) {
    return this.props.tie
      ? "Нічия! Спробуйте ще раз"
      : "Перемога за гравцем:" + " " + player;
  }

  gameRestart() {
    if (this.props.tempPlayers[0] != this.props.players[0].name) {
      this.props.reversPlayers()
    }

    this.props.clearFields()
    this.props.setTie(false)
    this.props.setGameOver(false)
  }

  render() {
    const tempPlayers = this.props.tempPlayers
    const players = this.props.players

    return (
      <header>
        <div className="header-line">
          <button
            className="back-to-menu"
            onClick={() => this.props.gameMode()}
          >
            <Back />
            <span>Меню</span>
          </button>
          <h1>Хрестики нолики</h1>
        </div>

        <section className="game-info">
          <div>
            {!this.props.gameOver ? (
              <>
                <p>Хід гравця</p>
                { tempPlayers[0] == players[0].name && <XPlayerIcon /> }
                { tempPlayers[0] == players[1].name && <OPlayerIcon /> }
              </>
            ) : (
              <>
                <p>{this.gameEndText(this.props.tempPlayers[0])}</p>
                <button
                  onClick={this.gameRestart.bind(this)}
                >Перезавантажити</button>
              </>
            )}
          </div>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tie: state.game.tie,
    gameOver: state.game.gameOver,
    tempPlayers: state.game.tempPlayers,
  };
};

const mapDispatchToProps = {
  gameMode,
  setTie,
  setGameOver,
  clearFields,
  reversPlayers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
