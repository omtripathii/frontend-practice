import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserInput.css";
import { toast } from "react-toastify";

function UserInput() {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [Linkdin, setLinkdin] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [hobbies, setHobies] = useState("");

  const handleSubmit = async () => {
    const hobies = hobbies.split(",");
    const newCard = { name, about, hobies, Linkdin, Twitter };
    try {
      const response = await fetch("http://localhost:3000/create-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCard),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Card saved successfully!");
        setName("");
        setAbout("");
        setLinkdin("");
        setTwitter("");
        setHobies("");
      } else {
        toast.error(data.error || "Failed to save card.");
      }
      console.log("Card saved:", data);
    } catch (error) {
      console.error("Error saving card:", error);
    }
  };

  return (
    <div className="user-container">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="about"
        value={about}
        onChange={(e) => {
          setAbout(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Hobbies Seperated by comma"
        value={hobbies}
        onChange={(e) => {
          setHobies(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Linkdin Profile Url"
        value={Linkdin}
        onChange={(e) => {
          setLinkdin(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Twitter Profile Url"
        value={Twitter}
        onChange={(e) => {
          setTwitter(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Add to the Cards
      </button>
      <Link to="/cards" className="button-style">
        View Cards
      </Link>
    </div>
  );
}
export default UserInput;
