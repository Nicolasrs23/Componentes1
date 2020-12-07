import {createContext,useContext,useState} from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

const addProduct = (product, quantity) =>{
  setProducts([...products,{...products, quantity}])

  console.log({...product, quantity})
}



  return <AppContext.Provider value={{products, addProduct}}>
      {children}
  </AppContext.Provider>;
};

export default useAppContext;