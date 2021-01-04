
import "./ItemDetail.scss";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../UseContext/CartContext";
import {Button} from 'react-bootstrap'

const { default: ItemCounter } = require("../Counter/ItemCount");


const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useContext(CartContext);

  const handleCounter = (counter) => {
    setQuantity(counter);
  };

  const addProductToCart = () => {
    const productInCart = cart.find((p) => p.item.id === product.id);


    if (productInCart) { 
      productInCart.quantity += quantity;
      setCart([...cart]);
    
    } else {
      setCart([...cart, { ...cart, quantity, item: product }]);
    }
  };

  return (
    <div id="ItemDetail"  className="FormatDetail">
      <img src={product.img} alt="product img"></img>
      <h2>{product.productName}</h2>
      <h3>${product.price}</h3>
      <h3>Detalle del prodcuto:{product.details}</h3>
      <ItemCounter
        maxValue={8}
        minValue={1}
        initialValue={1}
        onAdd={handleCounter}
      />
      <Button variant="light" onClick={addProductToCart}>
        <Link to="/Cart">Agregar al carrito </Link>
      </Button>
    </div>
  );
};

export default ItemDetail;



