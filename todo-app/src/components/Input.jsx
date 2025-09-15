import React, { useState } from "react";
import "./Input.css";

function Input({ addTodo }) {
  const [inputVal, setInputval] = useState("");

  const handleOnchange = (e) => {
    setInputval(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputVal.trim() === "") return;
    addTodo(inputVal);
    setInputval("");
  };

  return (
    <div className="inputClass">
      <input type="text" value={inputVal} onChange={handleOnchange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default Input;
