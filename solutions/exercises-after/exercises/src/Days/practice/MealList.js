import React, { useState } from "react";
import MealForm from "./MealForm";
import MealItem from "./MealItem";
import MealRandom from "./MealRandom";
import "./Meal.css";
function MealList() {
  const [chooses, setChooses] = useState([]);
  const [result, setResult] = useState("");
  const addChoose = choose => {
    if (!choose.text || /^\s*$/.test(choose.text)) {
      return;
    }
    const allChooses = [choose, ...chooses];
    setChooses(allChooses);
  };
  const removeChoose = id => {
    const removeArr = chooses.filter(choose => choose.id !== id);
    setChooses(removeArr);
  };

  const randomChoose = () => {
    const randomResult = Math.floor(Math.random() * chooses.length);
    const result = chooses[randomResult];
    setResult(result);
  };

  return (
    <div className="meal__list">
      <h1>If i have no idea..</h1>
      <MealForm onSubmit={addChoose} />
      <MealItem chooses={chooses} removeChoose={removeChoose} />
      <MealRandom randomChoose={randomChoose} result={result} />
    </div>
  );
}

export default MealList;
