import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ card }) {
  return card.map((name) => (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text> </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));
}
export default Cards;
