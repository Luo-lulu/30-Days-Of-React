//This is Mapping array of String
import React from "react";
import "./color.css";

const colors = [
  "#220b22",
  "#d1baa5",
  "#3084db",
  "#78b55d",
  "#f5af61",
  "#069094",
  "#599f22",
  "#bb90cf",
  "#3d9972",
  "#5cbaf3",
  "#5c192e",
  "#6ae674",
  "#0ff0fc",
  "#944c71",
  "#f3e916",
  "#ef5e03",
  "#d2c995",
  "#ae39f1",
  "#d385b4",
  "#87e754",
  "#4ee13b",
  "#03496f",
  "#8962aa",
  "#a13dc9"
];

const Colors = ({ colors }) => {
  const list = colors.map(color => (
    <div key={color} className="color__card" style={{ background: color }}>
      {color}
    </div>
  ));
  return list;
};

const Content = () => {
  return (
    <div className="color__line">
      <Colors colors={colors} />
    </div>
  );
};

function Color() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default Color;
