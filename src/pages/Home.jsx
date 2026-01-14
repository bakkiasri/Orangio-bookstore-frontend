import { useEffect, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import BookCard from "../components/BookCards";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const { books, setBooks } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, [setBooks]);
  console.log(books);
  // show ONLY available books
  const availableBooks = books.filter((book) => book.sold === false);

  return (
    <Container className="mt-4">
      <Row>
        {availableBooks.length === 0 && (
          <p className="text-center">No books available</p>
        )}

        {availableBooks.map((book) => (
          <Col md={4} key={book.id} className="mb-4">
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
