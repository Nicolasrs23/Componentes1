import { createContext, useContext, useState} from "react";


const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product, quantity) => {
    const existing = products.find((p) => p.id === product.id);


    if (existing) {
      existing.quantity += quantity;
      setProducts([...products]);
    } else {
      setProducts([...products, { ...product, quantity }]);
    }


  };

  return (
    <AppContext.Provider value={{ products, addProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
