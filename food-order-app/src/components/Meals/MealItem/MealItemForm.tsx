import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { inputConfigObj } from "../../UI/Input";
import { FormEvent, useRef, useState } from "react";

interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

function MealItemForm({ id, onAddToCart }: MealItemFormProps) {
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);
  const amountInputRef = useRef<HTMLInputElement>(null!);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredAmount: string = amountInputRef.current.value;
    const enteredAmountNumber: number = Number(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  }

  const config: inputConfigObj = {
    id: "amount_" + id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" input={config} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
