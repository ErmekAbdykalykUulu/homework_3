
import Button from "../UI/Button/Button"
import { useState } from "react";
import {ExpenseForm} from "../expense-form/ExpenseForm"
import "./NewExpense.css"

export const NewExpense = ({onNewExpenseAdd}) => {
const [showForm, setShowForm] = useState(false); 

 
const ShowExpenseForm =() =>{
   setShowForm((prevState) =>{
    return !prevState;
   });
  
};


  return (
    <div className="NewExpenses">
      {showForm ? (
        <ExpenseForm onShowForm={ShowExpenseForm}  onNewExpenseAdd = {onNewExpenseAdd} />
      ) : (
      <Button className ="button"  title="добавить новый рассход" onClick={ShowExpenseForm} />
    ) }
    </div>
  );
};


