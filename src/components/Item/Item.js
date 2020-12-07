import { CardDeck, Card } from "react-bootstrap";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Item.scss";
import useAppContext from "../UseContext/UseAppContext";

const Item = ({ item }) => {
  return (
    <div id="Item" className="item-container">
      <CardDeck>
        <Card className="imagen">
          <img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.productName}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
          </Card.Body>
          <button>
            <Link to={"/detail/" + item.id} activeClassName="me-activo">
              Comprar
            </Link>
          </button>
        </Card>
      </CardDeck>
    </div>
  );
};
export default Item;
