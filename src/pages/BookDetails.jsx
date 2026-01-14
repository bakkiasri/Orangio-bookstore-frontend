import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`https://backend-repo-bookstore.onrender.com/api/books/${id}`)
      .then((res) => setBook(res.data));
  }, [id]);

  const handleAddToCart = async () => {
    await axios.put(
      `https://backend-repo-bookstore.onrender.com/api/books/${book.id}`,
      {
        sold: true,
      }
    );
    console.log(book);
    alert("Added to cart");
    navigate("/cart");
  };

  return (
    <Container className="mt-4">
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <h4>₹{book.price}</h4>

      <Button disabled={book.sold} onClick={handleAddToCart}>
        {book.sold ? "Sold Out" : "Add to Cart"}
      </Button>
    </Container>
  );
}
