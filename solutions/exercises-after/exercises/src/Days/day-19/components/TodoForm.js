import React, { useState, useEffect, useRef } from "react";
import "./project.css";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  };

  return (
    <form className="todo__from" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo__edit"
            type="text"
            placeholder="Edit Todo"
            value={input}
            name="text"
            onChange={handleInputChange}
            ref={inputRef}
          />
          <button className="todo__edit__button">Edit</button>
        </>
      ) : (
        <>
          <input
            className="todo__input"
            type="text"
            placeholder="Add Todo"
            value={input}
            name="text"
            onChange={handleInputChange}
            ref={inputRef}
          />
          <button className="todo__button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
