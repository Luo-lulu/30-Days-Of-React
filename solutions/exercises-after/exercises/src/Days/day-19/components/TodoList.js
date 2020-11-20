import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./project.css";
function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("TODOLOCAK") || "")
  );

  useEffect(() => {
    localStorage.setItem("TODOLOCAK", JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removeArray = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArray);
  };

  const doneTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todolist">
      <h1>What's gonna do ?</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoItem
        todos={todos}
        doneTodo={doneTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoList;
