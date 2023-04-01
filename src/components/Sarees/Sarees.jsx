import React, { useEffect, useState } from "react";
import { totalPrice } from "../../utilities/tempodb";
import Saree from "../Saree/Saree";

const Sarees = () => {
  const [Sarees, setSarees] = useState([]);
  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setSarees(data));
  },[])
  const total = totalPrice(Sarees);
  return (
    <div>
      <h1>Welcome to Saree Section</h1>
      <h3>Total Price : {total}</h3>
      {Sarees.map((saree) => (
        <Saree key={saree.id} saree={saree}></Saree>
      ))}
    </div>
  );
};

export default Sarees;
