import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { inputConfigObj } from "../../UI/Input";

function MealItemForm({ id }: { id: string }) {
  const config: inputConfigObj = {
    id: "amount_" + id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={classes.form}>
      <Input label="amount" input={config} />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
