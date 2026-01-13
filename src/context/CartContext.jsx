import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([]); // ✅ REQUIRED

  const addToCart = (book) => {
    setCart((prev) => [...prev, book]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        total,
        books, // ✅ REQUIRED
        setBooks, // ✅ REQUIRED
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
