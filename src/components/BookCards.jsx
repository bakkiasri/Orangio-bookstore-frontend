import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Card>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        <Button as={Link} to={`/book/${book.id}`}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
