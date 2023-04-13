import "../assets/css/Switcher.css";
import React from "react";

class Switcher extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <label className="switch">
            <input 
                type="checkbox"
                checked={this.props.checked}
                onChange={e => this.props.onChange(e.target.checked)}
            />
            <span className="slider round"></span>
        </label>
    );
  }
}

export default Switcher;