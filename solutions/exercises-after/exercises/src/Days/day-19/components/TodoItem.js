import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import "./project.css";
function TodoItem({ todos, doneTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitEdit = value => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isDone ? "todo isdone" : "todo"} key={index}>
      <div onClick={() => doneTodo(todo.id)} key={todo.id}>
        {todo.text}
      </div>
      <div className="icons">
        <RiDeleteBin6Line
          onClick={() => {
            removeTodo(todo.id);
          }}
          className="delete__icon"
        />
        <BiEditAlt
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit__icon"
        />
      </div>
    </div>
  ));
}

export default TodoItem;
