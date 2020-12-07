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
     {/*  <button>Comprar {counter} </button> */}
    </div>
  );
};

export default ItemCounter;

/* 

import React, { useState } from "react";



const ItemCounter = ({initialValue, maxValue, onAdd}) => {

    const [counter, setCounter] = useState(initialValue);

    const incrementar = () => {
        if (counter >= initialValue && counter < maxValue) {
            setCounter(counter + 1)
            onAdd(counter + 1)
        }
    }
    const restar = () => {
        if (counter > initialValue) {
            setCounter(counter - 1)
            onAdd(counter - 1)
        }
 
    }
    

    return (
        
        <div style={{color: "midnightBlue", textAlign: "center"}}>
            <p>Cantidad</p>
            <p value="0">{counter}</p>
            <div>
                <button className="btn btn-block btn-danger" onClick={restar}>-</button>
                <button className="btn btn-block btn-success" onClick={incrementar}>+</button>
            </div>
            <button className="btn btn-block btn-warning">Comprar: {counter}</button>

        </div>

        
    );
}

export default ItemCounter
 */








//BUSCAR ATAJOS DE REACT POR EJEMPLO NFN


//import React, { useState } from "react";
/* import "../style.css";

const ItemCounter = props => {
  const [value, setValue] = useState(props.init ? parseInt(props.init) : 0);
  return (
    <div className="count">
      <button
        className="count__btn count__btn--dec"
        onClick={() => {
          if (value - 1 >= parseInt(props.min)) setValue(value - 1);
        }}
      >
        -
      </button>
      <input type="number" className="count__input" disabled value={value} />
      <button
        className="count__btn count__btn--add"
        onClick={() => {
          if (value + 1 <= props.max) {
            setValue(value + 1);
            props.onAdd();
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemCounter; */


//ESTO VA EN APP
{/* <ItemCounter init="0" min="0" max="20" onAdd={() => console.log("onAdd")} /> */}