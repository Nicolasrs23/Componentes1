import { React, useContext } from "react";
import { CartContext } from "../UseContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  console.log(cart);
  return (
    <div id="Cart" className="FormatCart">
      {cart.length === 0 ? (
        <Link to="/">Todavia no compraste, que esperas!!</Link>
      ) : (
        cart.map((cart) => (
          <h1>
            {" "}
            {`${cart.item.productName} cantidad: ${cart.quantity}`}
            <img src={cart.item.img}></img>
          </h1>
        ))
      )}
    </div>
  );
};

export default Cart;


