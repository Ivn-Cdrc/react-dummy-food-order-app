import CartContext from "./cart-context";
import { CartContextInterface } from "./cart-context";
import { Item } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [] as Item[],
  totalAmount: 0,
};

type ACTIONTYPE =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "REMOVE_ITEM"; payload: string };

function cartReducer(state: typeof defaultCartState, action: ACTIONTYPE) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.payload);
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  } else if (action.type === "REMOVE_ITEM") {
  }
  return defaultCartState;
}

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCartHandler(item: Item) {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  }

  function removeItem(id: string) {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  }

  const initialCartContext: CartContextInterface = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={initialCartContext}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
