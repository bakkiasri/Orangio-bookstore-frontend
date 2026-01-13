import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://backend-repo-bookstore.onrender.com/api/books/${id}`)
      .then((res) => setBook(res.data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(book);
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <h4>₹{book.price}</h4>

      <Button variant="success" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </Container>
  );
}
