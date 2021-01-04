import "./App.css";
import NavBar from "./container/NavBar/NavBar";
import Home from "./container/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import { AppProvider } from "./components/UseContext/UseAppContext";
import Cart from "../src/components/Cart/Cart";
import { CartProvider } from "../src/components/UseContext/CartContext";
import CategoryContainer from '../src/container/CategoryContainer/CategoryContainer'


function App() {
  return (
    <div className="App">
      <AppProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home greattings="Bienvenido a Red Queen" />
              </Route>
              <Route exact path="/category/:id">
                <CategoryContainer/>
            </Route>
              <Route
                exact
                path="/detail/:id/"
                component={ItemDetailContainer}
              ></Route>
              <Route exact path="/Cart" component={Cart}></Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </AppProvider>
    </div>
  );
}

export default App;
