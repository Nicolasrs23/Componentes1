
import './App.css';
import NavBar from './container/NavBar/NavBar'
import Home from './container/Home/Home'
import ItemCounter from './components/Counter/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cards from '../src/components/Cards/CardDeck'
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import  AppContext  from './components/UseContext/UseAppContext';
import {AppProvider} from './components/UseContext/UseAppContext'
import  Carrousel  from '../src/components/Carrousel/Carrousel';

import {useEffect, useState} from 'react'
import {getFirestore} from '../src/FireBase/index'

function App() {
  
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("producto")
   
    itemCollection.get().then((response) =>{
        console.log(response)
        const aux = response.docs.map(element =>{
          return element.data();
        });
      /*   setProducto(aux); */
        
    });
    
}, ([]));

  return (





    <div className="App">
      
      
{/*       <div>
  {producto ? producto.map(element =>{

  })}
</div> */}
      
      
      <AppProvider>
        <BrowserRouter>
          <NavBar />
          {/*  <Carrousel/> */}

          <Switch>
            <Route exact path="/">
              <Home greattings="Bienvenido a mi E-commerce" />
              {/*           <Cards/> */}
            </Route>

            <Route
              exact
              path="/detail/:id"
              component={ItemDetailContainer}
            ></Route>
          </Switch>
        </BrowserRouter>
      </AppProvider>

      {/*  <ItemCounter maxValue={8} minValue={0} initialValue={0}/> */}
    </div>
  );
}

export default App;
