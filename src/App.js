
import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import { NewExpense } from './components/new-expense/NewExpense';


function App() {
  const [expenses, setExpenses] = useState([
    
      {
        title: "Tуалетная бумага",
        price: 300,
        date:"09.01.2023"
      },
      {
        title: "Зарядник",
        price: 200,
        date: "10.01.2023"
      }
     
    
  ])
const AddNewExpenseHandler =(data) =>{
  const upDatedExpenses = [...expenses];
  upDatedExpenses.push(data)
  setExpenses(upDatedExpenses)
};

  return (
    <div>
     <NewExpense onNewExpenseAdd = {AddNewExpenseHandler}/>
     <Expenses expenses ={expenses}/>
    </div>
  );
}

export default App;
