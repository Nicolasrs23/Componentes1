import {createContext,useContext,useState} from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
const [dummyText, setDumyText] = useState('Nico')

  return <AppContext.Provider value={{ dummyText }}>
      {children}
  </AppContext.Provider>;
};

export default AppContext;