import "../assets/css/Menu.css";

import React from "react";
import { connect } from "react-redux";
import { setTheme, gameMode } from "../services/reducers/mainSlice"
import Switcher from "./Switcher";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  changeTheme(value) {
    let theme = value ? "dark" : "light";

    localStorage.setItem("theme", theme);
    this.props.setTheme(theme);
  }

  render() {
    const theme = this.props.theme
    return (
      <menu>
        <button
          onClick={() => this.props.gameMode()}
        >Почати гру</button>

        <div>
          <span className={theme != "light" ? "opacity" : ""}>
            Світла
          </span>
          <Switcher
            checked={theme == 'light' ? false : true}
            onChange={this.changeTheme.bind(this)}
          />
          <span className={theme != "dark" ? "opacity" : ""}>
            Темна
          </span>
        </div>
      </menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.main.theme,
  };
};

const mapDispatchToProps = {
  setTheme,
  gameMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
