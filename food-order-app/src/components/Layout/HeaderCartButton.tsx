import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

interface HeaderCartButtonProps {
  onClick: () => void;
}

function HeaderCartButton({ onClick }: HeaderCartButtonProps) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState<boolean>(false);
  const cartCtx = useContext(CartContext);

  // use object destructuring to pull items array and isolate it from cartCtx
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((counter, item) => {
    return counter + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  // change btnClasses to include classes.bump and set a timer that removes that class,
  // so that when it is added again in the future it plays
  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    // state changes so component re-evaluates and bump animation is reapplied
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
