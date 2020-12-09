import React, { useEffect } from "react";
import "./Card.css";
import chip from "../../Assets/chip.png";

const Card = ({ name }) => {
  useEffect(() => {
    alert(
      "'Credit card design' from https://www.youtube.com/watch?v=XeX1vsaufF0&ab_channel=OnlineTutorials."
    );
  }, []);

  return (
    <div className="card">
      <div className="face front">
        <h3 className="debit">Debit Card</h3>
        <h3 className="bank">Banco de Madera</h3>
        <img src={chip} className="chip" alt="Chip de tarjeta" />
        <h3 className="number">0123 4567 8901 2345</h3>
        <h5 className="valid">
          <span>
            Valid
            <br />
            thru
          </span>
          <span>10/23</span>
        </h5>
        <h5 className="cardHolder">{name}</h5>
      </div>
      <div className="face back">
        <div className="blackBar"></div>
        <div className="ccvText">
          <h5>Authorized Signature-not valid unless signed</h5>
          <div className="whiteBar"></div>
          <div className="ccv">123</div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Card;
