import classes from "./MealsSummary.module.css";

function MealsSummary() {
  return (
		<section className={classes.summary}>
			<h2>Delicious Ramen, served in a warm broth!</h2>
			<p>
				Choose your favourite bowl of ramen from out broad selection and enjoy
				a delicious lunch or dinner at home.
			</p>
			<p>
				All out meals are cooked with high-quality ingredients, just-in-time and of
				course, by experienced ramen chefs.
			</p>
		</section>
	);
}

export default MealsSummary;
