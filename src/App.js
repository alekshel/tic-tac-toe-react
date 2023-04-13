import React from "react";
import Menu from "./components/Menu"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "",
      gameStart: false,
    };
  }

  setTheme(theme) {
    this.setState({theme}, () => {
      document.documentElement.className = this.state.theme
    });
  }

  componentDidMount() {
    if (localStorage.getItem("theme")) {
      this.setTheme(localStorage.getItem("theme"))
      return
    }

    if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.setTheme("dark")
    }
  }

  render() {
    return (
      <main>
        <Menu
          theme={this.state.theme}
          setTheme={this.setTheme.bind(this)}
        />
      </main>
    )
  }
}

export default App;
