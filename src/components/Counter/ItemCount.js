import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import "../Counter/ItemCounter.scss"

const ItemCounter = ({ initialValue, maxValue, minValue, onAdd }) => {
  const [counter, setCounter] = useState(initialValue);

  const decrement = () => {
    if (counter === minValue) {
      return alert("No puede pedir cantidades en cero o negativas");
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
    <div className="Counter">
      <h1>{counter}</h1>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default ItemCounter;
