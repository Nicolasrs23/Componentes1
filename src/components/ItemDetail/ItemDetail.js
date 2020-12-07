import useAppContext from "../UseContext/UseAppContext";
import { useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";

const { default: ItemCounter } = require("../Counter/ItemCount");

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useAppContext();

  const handleCounter = (counter) => {
    setQuantity(counter);
  };

  const addProductToCart = () => {
    addProduct(product, quantity);
  };
  console.log({ ...product, quantity });

  return (
    <div id="ItemDetail">
      <h2>{product.productName}</h2>
      <h3>{product.price}</h3>
      <h3>{product.details}</h3>
      <ItemCounter
        maxValue={8}
        minValue={0}
        initialValue={0}
        onAdd={handleCounter}
      />
      <button onClick={addProductToCart}>
        <Link to="/Cart">Agregar al carrito </Link>
      </button>
    </div>
  );
};

export default ItemDetail;
