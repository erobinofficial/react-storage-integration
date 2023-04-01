import React from "react";
import { addToDB, removeFromDB } from "../../utilities/tempodb";
import "./Saree.css";

const Saree = (props) => {
  const { name, price, id } = props.saree;
  const addToCart = (id) => {
    addToDB(id);
  };
  const removeFromCart = (id) => {
    removeFromDB(id);
  };
  return (
    <div className="saree">
      <h1>Name: {name}</h1>
      <h2>Price: {price}</h2>
      <button onClick={() => addToCart(id)}>Add To Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
    </div>
  );
};

export default Saree;
