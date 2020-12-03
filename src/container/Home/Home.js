import React from 'react';
import ItemsList from '../../components/ItemList/ItemList';
/* import ItemDetailContainer from '../Item/ItemDetailContainer' */
import './homeStyle.scss'
/* import '../Item/Item'  */

 import {useEffect, useState} from 'react'
import { getProducts } from '../../components/Item/products';
/* import {products} from '../Item/ItemList' */
/* import ItemDetailContainer from '../Item/ItemDetailContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom' */
/* import {AppContext} from '../../components/UseContext/UseAppContext'  */

const Home = ({greattings}) => { 

   const [items, setItems] = useState([])




  useEffect(() => {
    getProducts()
    .then( 
      (response) =>{
         setItems(response)
     }
     )
  }, []) 
  //FALTA AGREGAR CATCH
    return (
      <div>
    <h1 className="homeStyle">{greattings}</h1> 
    {     <ItemsList items={items}/>  }
    {/*  <ItemDetailContainer/> */}

    </div>
    )
  }
 
export default Home; 