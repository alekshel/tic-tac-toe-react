import React from "react";
import { connect } from "react-redux";
import { setTheme } from "../services/reducers/mainSlice";
import Switcher from "./Switcher";

class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props);
  }

  changeTheme(value) {
    let theme = value ? "dark" : "light";

    localStorage.setItem("theme", theme);
    this.props.setTheme(theme);
  }

  render() {
    const theme = this.props.theme;
    return (
      <div>
        <span className={theme != "light" ? "opacity" : ""}>Світла</span>
        <Switcher
          checked={theme == "light" ? false : true}
          onChange={this.changeTheme.bind(this)}
        />
        <span className={theme != "dark" ? "opacity" : ""}>Темна</span>
      </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
