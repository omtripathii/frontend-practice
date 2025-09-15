import Todo from "./components/Todo";
import Input from "./components/Input";
import { useState } from "react";
function App() {
  const [todos, setTodo] = useState([]);
  const addTodo = (newTodo) => {
    // if (newTodo.trim(" ") === " ") return;
    setTodo([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    setTodo(todos.filter((_, i) => i != index));
  };
  return (
    <>
      <div>
        <Input addTodo={addTodo} />
        <Todo todos={todos} deleteTodo = {deleteTodo} />
      </div>
    </>
  );
}

export default App;
