import React from "react";

export interface Item {
  amount: number;
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
