import React from "react";
import "./Card.css";

function Card({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card, index) => {
        const { _id, name, about, hobies, Linkdin, Twitter } = card;
        return (
          <div key={_id || index} className="container">
            <h3>{name}</h3>
            <p>{about}</p>

            <h4>Interests</h4>
            <ul>
              {hobies?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {Linkdin && (
              <button onClick={() => window.open(Linkdin, "_blank")}>
                LinkedIn
              </button>
            )}
            {Twitter && (
              <button onClick={() => window.open(Twitter, "_blank")}>
                Twitter
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}


export default Card;
