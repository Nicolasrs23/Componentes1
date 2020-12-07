


  import { CardDeck, Card, /* Button, */ } from 'react-bootstrap';
/*   import logo from '../Cards/index.jpg' */
  import Button from '../Button/Button'
import { Link } from "react-router-dom";
import './Item.scss'
import useAppContext from '../UseContext/UseAppContext'

const Item = ({ item }) => {

/*   const ctx = useAppContext() */
  return (
    <div id="Item" className="item-container">
   <CardDeck>
  <Card className="imagen">
    <img  variant="top"   src= {item.img}/>
    <Card.Body>
      <Card.Title>{item.productName}</Card.Title>
      <Card.Text>
      {item.price}
   {/*  Combo consta de : Shampoo, Acondicionador y Mascara */}  {/* //EJEMPLO JOSE// */}
      </Card.Text>
    </Card.Body>
   {/*  <Button variant="primary">Go somewhere</Button>  */}{/* ///ACA PONER LINK PARA EL DETALLE */}
 {/*   //REVEER FUNCIONAMIENTO */}
  <button>
  <Link to={"/detail/" + item.id} activeClassName="me-activo">
                {/* {" "} */}
                Comprar{/* {" "} */}
              </Link>
  </button>
 {/*  <Button/> */}
  </Card>
  </CardDeck>
    </div>
  )
}
export default Item