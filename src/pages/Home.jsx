import { createContext, useState, useMemo } from "react";
export const CartContext = createContext();

export default function Home() {
  const { books = [], setBooks } = useContext(CartContext);

  useEffect(() => {
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
          <Col md={4} key={book.id}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
