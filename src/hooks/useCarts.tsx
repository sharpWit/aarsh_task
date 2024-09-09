import { createContext, ReactNode, useContext, useState } from "react";
import { toys } from "../utils/toyData";
import { calculateTotal } from "../utils/pricing";

// Define the shape of a toy item in the cart
interface CartItem {
  id: number;
  price: string;
  image: string;
  name: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (toyId: number) => void;
  removeFromCart: (toyId: number) => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (toyId: number) => {
    const toy = toys.find((t) => t.id === toyId);
    if (toy) {
      setCart((prevCart) => [...prevCart, toy]);
    }
  };

  const removeFromCart = (toyId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== toyId));
  };

  const getTotalPrice = () => calculateTotal(cart);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
