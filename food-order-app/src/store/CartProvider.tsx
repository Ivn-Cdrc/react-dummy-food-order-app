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
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    // before deriving updated items, check if item is already part of the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    let updatedItems;
    
    // if item does not exist in the cart ...
    if(existingCartItemIndex != -1) {
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount
      };
      // updating the array immutably. Copying contents of old array
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    // return new state snapshot with the new items
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
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
