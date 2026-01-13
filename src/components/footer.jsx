import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 p-3">
      <Container className="text-center">
        <p>Quick Links | About | Contact</p>
        <p>Follow us: Facebook | Instagram | Twitter</p>
        <p>© 2026 Online Bookstore</p>
      </Container>
    </footer>
  );
}
