import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prev) => [...prev, book]);
    setBooks((prev) => prev.filter((b) => b.id !== book.id));
  };

  return (
    <CartContext.Provider value={{ books, setBooks, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
