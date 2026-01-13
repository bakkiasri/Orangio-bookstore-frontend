import { useEffect, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import BookCard from "../components/BookCards";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const { books, setBooks } = useContext(CartContext);

  useEffect(() => {
    // ✅ Fetch only once
    if (books.length === 0) {
      axios
        .get("https://backend-repo-bookstore.onrender.com/api/books")
        .then((res) => setBooks(res.data));
    }
  }, [books, setBooks]);

  return (
    <Container className="mt-4">
      <Row>
        {books.map((book) => (
          <Col md={4} key={book.id} className="mb-4">
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
