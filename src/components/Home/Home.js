import React from 'react';
import ItemsList from '../Item/ItemList';
/* import ItemDetailContainer from '../Item/ItemDetailContainer' */
import './homeStyle.scss'
/* import '../Item/Item'  */

 import {useEffect, useState} from 'react'
import { getProducts } from '../Item/products';
/* import {products} from '../Item/ItemList' */
import ItemDetailContainer from '../Item/ItemDetailContainer'



 

const Home = ({greattings}) => { 

 /*  const [items, setItems] = useState([])




  useEffect(() => {
    getProducts()
    .then( 
      (response) =>{
         setItems(response)
     }
     )
  }, []) */
  //FALTA AGREGAR CATCH
    return (
      <div>
    <h1 className="homeStyle">{greattings}</h1> 
{/*      <ItemsList items={items}/>  */}
     <ItemDetailContainer/>

    </div>
    )
  }
 
export default Home; 