import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const DUMMY_MEALS: Meal[] = [
  {
    id: "m1",
    name: "Signature Tonkotsu",
    description: "Original pork broth that you know and love",
    price: 19.99,
  },
  {
    id: "m2",
    name: "Black Tonkotsu",
    description: "Original broth topped up with black sesame paste",
    price: 20.99,
  },
  {
    id: "m3",
    name: "Fire Noodles",
    description: "Original broth with a spicy secret blend!",
    price: 20.99,
  },
  {
    id: "m4",
    name: "Shio Tonkontsu",
    description: "Like the Original Signature broth, but lighter!",
    price: 18.99,
  },
];

function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      meal={meal}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
