import { React, useContext } from "react";
import { CartContext } from "../UseContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { useEffect, useState } from "react";
import { Form } from "../Form/Form";
import { getFirestore } from "../../FireBase/index";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
 
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState("");
 
  useEffect(() => {
    let totalCart = 0;
    cart.forEach((cartItem) => {
      totalCart = totalCart + cartItem.quantity * cartItem.item.price;
    });
    setTotal(totalCart);
  }, [cart]);

  const addOrder = (dataBuyer) => {
    let newOrder = {
      buyer: dataBuyer,
      items: cart,
      date: Date.now(), 
      total: total,
    };
    const db = getFirestore();

    db.collection("orders")
      .add(newOrder)
      .then(function (docRef) {
        setOrderId(docRef.id);
        alert("el id de tu compra es:" + docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const getGrandTotal = () => {
    return cart.reduce((acc, p) => (acc += p.item.price * p.quantity), 0);
  };

  const deleteProduct = (id) => {
    cart.splice(
      cart.findIndex((p) => p.id === id),
      1
    );

    setCart([...cart]);
  };

  return (
    <div id="Cart" className="FormatCart">
      {cart.length === 0 ? (
        <Link to="/">Todavia no compraste, que esperas!!</Link>
      ) : (
        cart.map((cart) => (
          <h1>
            {`
            ${cart.item.productName} 
            cantidad: ${cart.quantity} 
             precio: $ ${cart.item.price}
            `}
            <img src={cart.item.img}></img>
          </h1>
        ))
      )}
      <h3>Total de su orden ${getGrandTotal()}</h3>
      <button onClick={deleteProduct}>Borrar</button>
      {/* <Button variant="dark">Comprar</Button> */}
      <Form addOrder={addOrder} />
    </div>
  );
};

export default Cart;
