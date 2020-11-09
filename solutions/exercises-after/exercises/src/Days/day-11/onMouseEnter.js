import React, { Component } from "react";
import "./onMouseEnter.css";
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const random = () => {
  let index = Math.floor(Math.random() * 500);
  return index;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
class OnMouseEnter extends Component {
  state = {
    margintop: 0,
    margintright: 0
  };

  handleMouseEnter = e => {
    console.log("!!!");
    this.setState({
      margintop: random(),
      margintright: random()
    });
    console.log(this.state.margintop, this.state.margintright);
  };
  render() {
    const randomPosition = {
      position: "relative",
      top: this.state.margintop,
      left: this.state.margintright
    };
    console.log(randomPosition);

    return (
      <>
        <div
          className="word"
          onMouseEnter={this.handleMouseEnter}
          style={randomPosition}
        >
          30 Days of React
        </div>
      </>
    );
  }
}

export default OnMouseEnter;
