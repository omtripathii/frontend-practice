import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  descriptionAtom,
  filteredList,
  searchAtom,
  titleAtom,
  todosAtom,
} from "../store/atoms/count";
import TodoView from "./TodoView";

function Todo() {
  const myStyle = {
    padding: "10px",
    margin: "10px",
  };
  const [titleVal, setTitleVal] = useRecoilState(titleAtom);
  const [desVal, setDesVal] = useRecoilState(descriptionAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);
  
  const [searchVal, setSearchVal] = useRecoilState(searchAtom);
  const filterList = useRecoilValue(filteredList);

  function addTodo() {
    const newTodo = { title: titleVal, description: desVal };
    //Push is not working because everytime the previous object is getting changhed and not modified
    // setTodos(todos.push(newTodo));
    setTodos([...todos, newTodo]);
    setDesVal("");
    setTitleVal("");
  }
  return (
    <div style={myStyle}>
      <input
        type="text"
        value={titleVal}
        onChange={(e) => {
          setTitleVal(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={desVal}
        onChange={(e) => {
          setDesVal(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <br />
      <input
        type="text"
        placeholder="Search for Your Todos"
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
      {filterList.map((item, index) => {
        return (
          <div key={index}>
            <TodoView title={item.title} description={item.description} />
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
