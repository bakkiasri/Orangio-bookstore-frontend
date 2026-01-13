import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Container } from "react-bootstrap";

export default function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <Container className="mt-4">
      <h3>Shopping Cart</h3>

      {cart.map((item) => (
        <div key={item.id} className="d-flex gap-3 p-4 ">
          {item.title} - ₹{item.price}
          <Button onClick={() => removeFromCart(item.id)} className="">
            Remove
          </Button>
        </div>
      ))}

      <h4>Total: ₹{total}</h4>
      <Button>Complete Purchase</Button>
    </Container>
  );
}
