import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  // Add to cart + remove from home
  const addToCart = (book) => {
    setCart((prev) => [...prev, book]);
    setBooks((prev) => prev.filter((b) => b.id !== book.id));
  };

  // ✅ Remove from cart + add back to home
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const removedItem = prevCart.find((item) => item.id === id);

      if (removedItem) {
        setBooks((prevBooks) => [...prevBooks, removedItem]);
      }

      return prevCart.filter((item) => item.id !== id);
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        books,
        setBooks,
        cart,
        addToCart,
        removeFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
