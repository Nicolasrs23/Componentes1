import React from 'react';
import ItemsList from '../Item/ItemList';
import './homeStyle.scss'
/* import '../Item/Item' */

const Home = ({greattings}) => { 
    return (
      <div>
    <h1 className="homeStyle">{greattings}</h1> 
     <ItemsList/> 
    </div>
    )
  }
 
export default Home; 