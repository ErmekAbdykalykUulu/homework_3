import { useState } from "react";
import Button from "../UI/Button/Button"
import FormInput from "../UI/FormINput/FormInput"
import "./ExpenseForm.css"


export const ExpenseForm = (props) => {

    const[title, setTitle] = useState("")
    const[price, setPrice] = useState(0)
    const[date, setDate] = useState(null)

    
    const CancelHandler = (event) =>{
event.preventDefault();
props.onShowForm();
};

const titleINputChangeHandler = (event) =>{
setTitle (event.target.value);
}
const priceINputChangeHandler = (event) =>{
    const value = event.target.value
    console.log(value);
    if(value.charAt(0) !== "-"){
        setPrice (value);
    }

}
const dateINputChangeHandler = (event) =>{
setDate (event.target.value);
}

const SaveHandler = (event) =>{
event.preventDefault();
   
const expenseData = {
     title ,
     date,
     price
};

    props.onNewExpenseAdd (expenseData)
   
};

  return (
    <form  className="allForm">
    <FormInput 
    id= "name"
    labelName= "Название"
    InputTipe= "text"
    placeholder ="введите..."
    value ={title}
    onChange={titleINputChangeHandler}
    className = "nameOfLabel"
   
    
    />
    <FormInput 
    id ="price"
    labelName= "Количество"
    InputTipe="number"
    value ={price}
    onChange={priceINputChangeHandler}
    className = "nameOfPrice"
    
    />
    <FormInput 
    id ="date"
    labelName= "Дата"
    InputTipe= "date"
    placeholder="дд.мм.гггг"
    value ={date}
    onChange = {dateINputChangeHandler}
    className = "nameOfDate"
    />
    <Button className = "cencelled" id="cencelled"  title="отмена" onClick ={CancelHandler}/>
    <Button className= "Saived" title="Cохранить" onClick ={SaveHandler}/>
    
   
  </form>
  )
}

