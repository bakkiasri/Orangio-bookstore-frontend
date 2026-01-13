import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

const CartProvider = () => {
  const { cart = [], removeFromCart, total = 0 } = useContext(CartContext);

  const addToCart = (book) => {
    setCart((prev) => [...prev, book]);
  };

  // // ✅ THIS WAS MISSING
  // const removeFromCart = (id) => {
  //   setCart((prev) => prev.filter((item) => item.id !== id));
  // };

  // // ✅ Calculate total safely
  // const total = useMemo(() => {
  //   return cart.reduce((sum, item) => sum + item.price, 0);
  // }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart, // ✅ MUST be here
        total,
      }}
    >
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} - ₹{item.price}
          <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
        </div>
      ))}
    </CartContext.Provider>
  );
};
export default CartProvider;
