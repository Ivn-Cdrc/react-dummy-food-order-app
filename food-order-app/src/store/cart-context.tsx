import React from "react";

export interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface CartContextInterface {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextInterface>(
  {} as CartContextInterface
);

export default CartContext;
