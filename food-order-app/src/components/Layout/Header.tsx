import { Fragment } from "react";
import classes from "./Header.module.css";

import ramenImg from "../../assets/ramen-cropped.png";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yummy Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={ramenImg} alt="A bowl of ramen." />
      </div>
    </Fragment>
  );
}

export default Header;
