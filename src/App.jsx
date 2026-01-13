import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Heading";
import Footer from "./components/footer";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/carts";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
