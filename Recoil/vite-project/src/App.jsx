import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Components/Todo";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Todo />
        </RecoilRoot>
      </div>
    </>
  );
}

export default App;
