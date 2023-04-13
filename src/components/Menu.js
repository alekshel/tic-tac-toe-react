import "../assets/css/Menu.css";

import React from "react";
import { connect } from "react-redux";
import { gameMode } from "../services/reducers/mainSlice";
import ThemeSwitcher from "./ThemeSwitcher";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <menu>
        <button onClick={() => this.props.gameMode()}>Почати гру</button>
        <ThemeSwitcher />
      </menu>
    );
  }
}

const mapDispatchToProps = {
  gameMode,
};

export default connect(null, mapDispatchToProps)(Menu);
