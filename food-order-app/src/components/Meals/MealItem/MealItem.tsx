import { useContext } from "react";
import classes from "./MealItem.module.css";
import { Meal } from "../AvailableMeals";
import { Item } from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

interface MealItemProps {
	meal: Meal;
}

function MealItem({meal}: MealItemProps) {
	const cartCtx = useContext(CartContext);

	const formattedPrice = `$${meal.price.toFixed(2)}`;

	function addItemToCartHandler(amount: number) {
		const newItem: Item = {
			id: meal.id,
			name: meal.name,
			amount: amount,
			price: meal.price
		}

		cartCtx.addItem(newItem);
	}

  return (
		<li className={classes.meal}>
			<div>
				<h3>{meal.name}</h3>
				<div className={classes.description}>{meal.description}</div>
				<div className={classes.price}>{formattedPrice}</div>
			</div>
			<div>
				<MealItemForm id={meal.id} onAddToCart={addItemToCartHandler} />
			</div>
		</li>
	);
}

export default MealItem;
