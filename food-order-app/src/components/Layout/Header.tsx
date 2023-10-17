import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import ramenImg from "../../assets/ramen-cropped.png";

interface HeaderProps {
  onShowCart: () => void;
}

function Header({onShowCart}: HeaderProps) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yummy Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={ramenImg} alt="A bowl of ramen." />
      </div>
    </Fragment>
  );
}

export default Header;
