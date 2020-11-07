import React, { useState } from 'react';

//PARA QUE ES EL ON ADD?????

const ItemCounter = ({initialValue, maxValue, minValue }) =>{
const [counter, setCounter] = useState(initialValue);




const decrement = () => {
  if (counter === minValue ){
    return alert("No puede pedir cantidades negativas")
  
  };
setCounter (counter - 1);

console.log(decrement)
}

const increment = () => {
  if(counter === maxValue){
    return alert("Comunicarse por ventas al por mayor")
  }
   
   
  setCounter(counter + 1);

}



  return(
<div>
  <h2>
    Contador
  </h2>

  <h1>{counter}</h1>
  <button onClick={decrement}>Decrement</button>
  <button onClick={increment}>increment</button>
</div>


  );

}

export default ItemCounter;






//BUSCAR ATAJOS DE REACT POR EJEMPLO NFN

/* 

const itemCounter = {

  state = { value: 5 };

 const = increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  const = decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
} */




/* decrement = () => {
    this.setState(prevState => ({
        value: Math.max(prevState.value - 1, 0)
      }));
    }; */

/* export default hooks; */