import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.scss";
import {Button} from 'react-bootstrap';

const Item = ({ item }) => {
  return (
    <div id="Item" className="item-container">
      <CardDeck>
        <Card className="imagen">
          <img variant="top" src={item.img} alt="product img" />
          <Card.Body>
            <Card.Title>{item.productName}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
          </Card.Body>
          <Link to={"/detail/" + item.id} activeclassname="me-activo">
          <Button variant="primary">
              Comprar
          </Button>
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};
export default Item;
