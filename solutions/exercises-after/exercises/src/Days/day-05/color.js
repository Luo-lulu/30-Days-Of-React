import React from "react";
import "./App.css";

// const randomColor = () => {
//   let str = "0123456789abcdef";
//   let color = "";
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length);
//     color += str[index];
//   }
//   return "#" + color;
// };
// const colorStyle = {
//   background: result
// };

const DeciedColor = ({ color }) => {
  const colorList = color.map(colorr => (
    <div className="color__card" key={colorr} style={{ background: colorr }}>
      {colorr}
    </div>
  ));
  return colorList;
};
const RandomColor = ({ color }) => {
  return (
    <div>
      <DeciedColor color={color} />
    </div>
  );
};

const App = () => {
  const color = ["#c2792f", "#75eca1", "#7923be", "#cc9640", "#eca4c8"];
  return (
    <div className="App">
      <RandomColor color={color} />
    </div>
  );
};

export default App;
