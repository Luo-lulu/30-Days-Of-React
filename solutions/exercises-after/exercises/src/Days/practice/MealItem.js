import React from "react";
// import MealForm from "./MealForm";
import { RiDeleteBin6Line } from "react-icons/ri";

function MealItem({ chooses, removeChoose }) {
  return chooses.map((choose, index) => (
    <div className="choose" key={index}>
      <div key={choose.id} className="choose__text">
        {choose.text}
      </div>
      <div className="icon__delete">
        <RiDeleteBin6Line
          onClick={() => {
            removeChoose(choose.id);
          }}
          className="delete__icon"
        />
      </div>
    </div>
  ));
}

export default MealItem;
