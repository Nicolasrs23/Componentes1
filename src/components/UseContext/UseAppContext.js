import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  const addProduct = (product, quantity) => {
  
    const existing = products.find((p) => p.id === product.id);


    //si existe sumar cantidades

    if (existing) {
      existing.quantity += quantity;
      setProducts([...products]);
     
    } else {
      // si no existe agregar
      setProducts([...products, { ...product, quantity }]);
    }

    /* const addProduct = (product, quantity) =>{

  SI BIEN ES LO MISMO PROBAR DESPUES DECLARANDO LA CONST PRODUCTINCART YA QUE NO SALIO

   const productInCart = products.find ((p) => 
    p.id === product.id
   )
    if(productInCart){
    productInCart.quantity += quantity
    setProducts([...products])
   }
    else {
    setProducts([...products, {...product, quantity }])
    }
  

   setProducts([...products,{...product, quantity}])

    console.log({...product, quantity})  */
  };

  const productsCount = () => {
    return products.reduce((acc, p) => (acc += p.quantity), 0);
  };

  //TAREAAAA
  //editar cantidades
  //eliminar cantidades
  // total de productos
  // eliminar un item del carrito

  return (
    <AppContext.Provider value={{ products, addProduct, productsCount }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
