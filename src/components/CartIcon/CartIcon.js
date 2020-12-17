import { React, useContext } from "react";
import "./iconStyle.scss";
import { CartContext } from "../UseContext/CartContext";
import { Link } from "react-router-dom";

const Icons = ({ iconName, callback }) => {
  const [cart, setCart] = useContext(CartContext);

  const getQuantity = () => {
    let counterProduct = 0;
    cart.forEach((product) => {
      counterProduct += product.quantity;
    });
    return counterProduct;
  };

  return (
    <div className="contenedor">
      <Link to="/Cart">
        <div>{getQuantity()}</div>
      </Link>
      <i className={`fas fa-${iconName}`} onClick={callback} />
    </div>
  );
};

export default Icons;
