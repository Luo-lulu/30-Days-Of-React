import React from "react";
import "./number.css";

const numbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

const isPrime = n => {
  for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      return false;
    } else {
      return true;
    }
  }
};
const bgColor = () => {
  if (isPrime({ numbers })) {
    return "red";
  }
};

const Numbers = ({ numbers }) => {
  const list = numbers.map(number => {
    // const result = bgColor();
    const colorStyle = {
      background: bgColor()
    };
    return (
      <div className="number__box" key={number} style={colorStyle}>
        {number}
      </div>
    );
  });
  return list;
};

const NumberLine = () => {
  return (
    <div className="number__line">
      <Numbers numbers={numbers} />
    </div>
  );
};

function Number() {
  return (
    <div className="App">
      <NumberLine />
    </div>
  );
}

export default Number;
