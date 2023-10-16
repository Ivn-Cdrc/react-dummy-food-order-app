import classes from "./MealItem.module.css";
import { Meal } from "../AvailableMeals";
import MealItemForm from "./MealItemForm";

interface MealItemProps {
	meal: Meal;
}

function MealItem({meal}: MealItemProps) {
	const formattedPrice = `$${meal.price.toFixed(2)}`;

  return (
		<li className={classes.meal}>
			<div>
				<h3>{meal.name}</h3>
				<div className={classes.description}>{meal.description}</div>
				<div className={classes.price}>{formattedPrice}</div>
			</div>
			<div>
				<MealItemForm id={meal.id}/>
			</div>
		</li>
	);
}

export default MealItem;
