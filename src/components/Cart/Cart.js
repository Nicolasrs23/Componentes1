import React from "react";
import useAppContext from "../UseContext/UseAppContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { products } = useAppContext();
  console.log(products);

  return (
    <div id="Cart">
      {products.length === 0 ? (
        <Link to="/">Todavia no compraste, que esperas!!</Link>
      ) : (
        products.map((product) => (
          <h1> {`${product.productName} cantidad: ${product.quantity}`} </h1>
        ))
      )}
    </div>
  );
};

export default Cart;


