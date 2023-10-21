import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext, { Item } from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

interface CartItem {
  id: string;
  name: String;
  amount: number;
  price: number;
}

interface CartProps {
  onClose: () => void;
}

function Cart({ onClose }: CartProps) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler(id: string) {}

  function cartItemAddHandler(item: Item) {}

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onBackdropClick={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
