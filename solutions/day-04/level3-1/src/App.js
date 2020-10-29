import React, { Component } from "react";
import "./App.css";

const randomColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const result = randomColor();
const colorStyle = {
  background: result
};
const RandomColor = () => (
  <div style={colorStyle} className="color__card">
    {result}
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandomColor />
      </div>
    );
  }
}

export default App;
