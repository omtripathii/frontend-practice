import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserInput from "./components/UserInput";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/cards", {
        method: "GET",
      });
      const cardData = await res.json();
      setCards(cardData.response);
    }
    fetchData()
  },[]);
  console.log(cards);
  
  
  return (
    <>
      <div className="Cards">
        <Router>
          <Routes>
            <Route path="/" element={<UserInput />} />
            <Route path="/cards" element={<Card cards={cards}/>} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </Router>
      </div>
    </>
  );
}

export default App;
