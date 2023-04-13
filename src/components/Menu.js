import "../assets/css/Menu.css";

import React from "react";
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
        <button>Почати гру</button>

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

export default Menu;
