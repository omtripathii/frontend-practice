import React, { useState } from "react";
import "./Todo.css";
function Todo({ todos, deleteTodo }) {
  return (
    <div className="todoclass">
      <h2>My Todos</h2>
      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            <span>{t}</span> <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
