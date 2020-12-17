import "./App.css";
import NavBar from "./container/NavBar/NavBar";
import Home from "./container/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { AppProvider } from "./components/UseContext/UseAppContext";
import Cart from "../src/components/Cart/Cart";
import { CartProvider } from "../src/components/UseContext/CartContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />

            {/*  <Carrousel/> */}

            <Switch>
              <Route exact path="/">
                <Home greattings="Bienvenido a mi E-commerce" />
              </Route>

              <Route
                exact
                path="/detail/:id"
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
