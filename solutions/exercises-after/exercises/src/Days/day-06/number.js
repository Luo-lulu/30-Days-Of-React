import React from "react";
import "./number.css";

const numbers = [
  [0, "even"],
  [1, "odd"],
  [2, "prime"],
  [3, "odd"],
  [4, "even"],
  [5, "prime"],
  [6, "even"],
  [7, "prime"],
  [8, "even"],
  [9, "odd"]
];
const NumberPut = ({ number: [number, kind] }) => (
  <li>
    {number} {kind}
  </li>
);

const Numbers = ({ numbers }) => {
  const numbersList = numbers.map(number => (
    <NumberPut numbers={numbers} key={number} />
  ));
  console.log(numbersList);
  return <ul>{numbersList}</ul>;
};
function Number() {
  return (
    <div className="App">
      <Numbers numbers={numbers} />
    </div>
  );
}

export default Number;
