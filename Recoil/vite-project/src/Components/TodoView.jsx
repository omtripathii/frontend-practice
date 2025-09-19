import React from "react";

function TodoView({ title, description }) {
  const myStyle = {
    color: "red",
    fontSize: "16px",
    backgroundColor: "lightblue",
    border: "solid",
  };
  return (
    <div style={myStyle}>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
}

export default TodoView;
