import React, { useState, useEffect } from "react";

const ItemCounter = ({ initialValue, maxValue, minValue, onAdd }) => {
  const [counter, setCounter] = useState(initialValue);

  const decrement = () => {
    if (counter === minValue) {
      return alert("No puede pedir cantidades negativas");
    }
    setCounter(counter - 1);
    onAdd(counter - 1);

    console.log(decrement);
  };

  const increment = () => {
    if (counter === maxValue) {
      return alert("Comunicarse por ventas al por mayor");
    }

    setCounter(counter + 1);
    onAdd(counter + 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default ItemCounter;
