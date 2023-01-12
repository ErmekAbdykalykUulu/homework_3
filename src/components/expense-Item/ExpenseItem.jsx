import "./ExpenseItem.css"

  export const ExpenseItem = (props) => {
  const {date,title, price} = props
    return (
    <div className="ExpenseItem">
      <p className="DataExpenseItem">{date.toString()}</p>
      <p className="TitleExpenseItem"> {title}</p>
      <p className="PriceExpenseItem">{price} Сом</p>
    </div>
  )
}


