import React from "react";
import { connect } from "react-redux";
import { setTheme } from "./services/reducers/mainSlice";
import Menu from "./components/Menu";
import Game from "./components/Game";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (localStorage.getItem("theme")) {
      this.props.setTheme(localStorage.getItem("theme"));
      return;
    }

    if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.props.setTheme("dark");
    }
  }

  render() {
    return <main>{this.props.gameStart ? <Game /> : <Menu />}</main>;
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.main.theme,
    gameStart: state.main.gameStart,
  };
};

const mapDispatchToProps = {
  setTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
