import React, { Component } from "react";

const Input = () => {
  return (
    <div>
      Type:
      <input type="text"></input>
    </div>
  );
};

class Level2 extends Component {
  render() {
    return (
      <div className="App">
        <Input />
      </div>
    );
  }
}

export default Level2;
