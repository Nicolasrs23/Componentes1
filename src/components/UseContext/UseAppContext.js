import { createContext, useContext, useState, useEffect } from "react";
import { getFirestore } from "../../FireBase/index";

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
      setProducts([...products, { ...product, quantity }]);
    }
  };

  return (
    <AppContext.Provider value={{ products, addProduct /* productsCount */ }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
