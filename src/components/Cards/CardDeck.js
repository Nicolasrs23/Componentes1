import { CardDeck, Card } from "react-bootstrap";
import logo from "../Cards/index.jpg";
import Button from "../Button/Button";

const Cards = () => {
  return (
    <CardDeck>
      <Card>
        <img variant="top" src={logo} alt="Logo" />
        <Card.Body>
          <Card.Title>Combo Loreal</Card.Title>
          <Card.Text>
            Combo consta de : Shampoo, Acondicionador y Mascara
          </Card.Text>
        </Card.Body>

        <Button />
      </Card>
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Cards;
