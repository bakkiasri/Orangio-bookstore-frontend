import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  return (
    <CartContext.Provider value={{ books, setBooks }}>
      {children}
    </CartContext.Provider>
  );
};
