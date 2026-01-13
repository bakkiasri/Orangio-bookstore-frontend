import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

export default function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Shopping Cart</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <Card key={item.id} className="mb-3 shadow-sm">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={6}>
                  <strong>{item.title}</strong>
                </Col>
                <Col xs={3}>₹{item.price}</Col>
                <Col xs={3} className="text-end">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      )}

      <h4 className="mt-4">Total: ₹{total}</h4>
      <Button variant="success" className="mt-2">
        Complete Purchase
      </Button>
    </Container>
  );
}
