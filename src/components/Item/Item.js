/* 
const Item =({item}) =>{

  return(
      <div id='Item'>
         <h2>{item.productName}</h2> 
      </div>
  )
  
  }
  
  export default Item */


  import { CardDeck, Card, /* Button, */ } from 'react-bootstrap';
  import logo from '../Cards/index.jpg'
  import Button from '../Button/Button'
import { Link } from "react-router-dom";
import './Item.scss'
import {useContext} from 'react'
import AppContext from '../UseContext/UseAppContext'

const Item = ({ item }) => {

  const ctx = useContext(AppContext)
  return (
    <div id="Item" className="item-container">
   <CardDeck>
  <Card className="imagen">
    <img  variant="top"   src= {item.img}/>
    <Card.Body>
      <Card.Title>{item.productName}</Card.Title>
      <Card.Text>
    Combo consta de : Shampoo, Acondicionador y Mascara {ctx.dummyText} {/* //EJEMPLO JOSE// */}
      </Card.Text>
    </Card.Body>
   {/*  <Button variant="primary">Go somewhere</Button>  */}{/* ///ACA PONER LINK PARA EL DETALLE */}
  
  <Button/>
  </Card>
  </CardDeck>
    </div>
  )
}
export default Item