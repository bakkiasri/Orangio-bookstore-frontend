import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button as={Link} to={`/book/${book.id}`}>
            View Details
          </Button>
          {/* <Button variant="success" onClick={() => addToCart(book)}>
            Add to Cart
          </Button> */}
        </div>
      </Card.Body>
    </Card>
  );
}
