import { ExpenseItem } from "../expense-Item/ExpenseItem"
import "./Expenses.css"
const Expenses = ({expenses}) => {
  return(
   <ul className="ul">
      {expenses.map((elem) =>{
        return (
        <ExpenseItem title={elem.title} 
        price={elem.price}
        date={elem.date} />)
      }) }
    </ul>)
}

export default Expenses
