import React, { useEffect, useState } from "react";
import Saree from "../Saree/Saree";

const Sarees = () => {
  const [Sarees, setSarees] = useState([]);
  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setSarees(data));
  },[])
  return (
    <div>
      <h1>Welcome to Saree Section</h1>
      {Sarees.map((saree) => (
        <Saree key={saree.id} saree={saree}></Saree>
      ))}
    </div>
  );
};

export default Sarees;
