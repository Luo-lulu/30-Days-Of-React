import React from "react";

function MealRandom({ chooses, randomChoose, result }) {
  return (
    <div className="random__block">
      <button
        className="random__btn"
        onClick={() => {
          randomChoose(chooses);
        }}
      >
        抽籤
      </button>
      <div className="random__result">{result.text}</div>
    </div>
  );
}

export default MealRandom;
