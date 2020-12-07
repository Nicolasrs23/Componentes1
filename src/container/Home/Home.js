import React from "react";
import ItemsList from "../../components/ItemList/ItemList";
import "./homeStyle.scss";
import { useEffect, useState } from "react";
import { getProducts } from "../../components/Item/products";

const Home = ({ greattings }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setItems(response);
    });
  }, []);
  //FALTA AGREGAR CATCH
  return (
    <div>
      <h1 className="homeStyle">{greattings}</h1>
      {<ItemsList items={items} />}
    </div>
  );
};

export default Home;
