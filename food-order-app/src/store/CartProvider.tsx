import CartContext from "./cart-context";
import { CartContextInterface } from "./cart-context";
import { Item } from "./cart-context";

function CartProvider({ children }: { children: React.ReactNode }) {
  function addItemToCartHandler(item: Item) {}

  function removeItem(id: string) {}

  const initialCartContext: CartContextInterface = {
    items: [],
    totalAmount: 0,
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
