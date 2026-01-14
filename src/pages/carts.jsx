import { useContext, useEffect } from "react";
// import { CartContext } from "../context/CartContext";
import { CartContext } from "../context/CartContext";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

export default function Cart() {
  const { books, setBooks } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data));
  }, [setBooks]);

  const handleRemove = async (book) => {
    await axios.put(`http://localhost:5000/api/books/${book.id}`, {
      sold: false,
    });

    const res = await axios.get("http://localhost:5000/api/books");
    setBooks(res.data);
  };

  const cartBooks = books.filter((book) => book.sold);
  const total = cartBooks.reduce((sum, b) => sum + b.price, 0);

  return (
    <Container className="mt-4">
      <h3>Shopping Cart</h3>

      {cartBooks.length === 0 && <p>Your cart is empty</p>}

      {cartBooks.map((book) => (
        <div key={book.id} className="d-flex justify-content-between mb-2">
          <div>
            <strong>{book.title}</strong> — ₹{book.price}
          </div>
          <Button size="sm" variant="danger" onClick={() => handleRemove(book)}>
            Remove
          </Button>
        </div>
      ))}

      {cartBooks.length > 0 && <h4>Total: ₹{total}</h4>}
    </Container>
  );
}
