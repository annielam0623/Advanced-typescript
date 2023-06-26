import React,{ createContext, useState, useEffect, ReactNode } from "react";


interface CartContextProps {
  cart: CartItem[];
  handleCartAdd: (newItem: CartItem) => void;
  handleCartRemove: (item: CartItem) => void;
}

interface CartProviderProps {
  children: ReactNode;
}
export type CartItem = {
  _id: string;
  title: string;
  pic: string;
  description: string;
  price: number;
  quantity: number;
};

export namespace CartContext {
  export type CartItem = {
    _id: string;
    title: string;
    pic: string;
    description: string;
    price: number;
    quantity: number;
  };
}

export const CartContext = React.createContext<CartContextProps>({
// export const CartContext = createContext<CartContextProps>({
  cart: [],
  handleCartAdd: () => {},
  handleCartRemove: () => {},
});



export default function CartProvider({children}: CartProviderProps) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')!) ?? [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleCartAdd = (newItem: { _id: any; }) => {
    const cartFilter = cart.filter((item: { _id: any; }) => item._id === newItem._id)
    cartFilter.length === 0
      ? setCart((prev: any) => [...prev, {...newItem, quantity: 1}])
      : setCart((prev: any) => prev.map((item: { _id: any; quantity: number; }) => {
        return item._id === newItem._id
          ? {...item, quantity: item.quantity + 1}
          : item
      }))
  }

  const handleCartRemove = (item: { _id: any; }) => {
    setCart((prev: any[]) => prev.filter(i => i._id !== item._id))
  }

  return (
  <CartContext.Provider value={{cart, handleCartAdd, handleCartRemove}}>
    {children}
  </CartContext.Provider>
  );
}