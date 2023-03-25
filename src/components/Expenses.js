import React, { useState } from 'react'
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import Card from "./Card"
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  /* Below function filters the expenses via the year */
  /* we then in the map below map out those filtered results */
  const filteredExpenses = props.items.filter(x =>{
    return x.date.getFullYear().toString() === filteredYear;
  })

 /*  let expensesContent = <p>No expenses found</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />
    ))
  } */

  return (
    <div>
      <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
          {/* Below is a condition in which if the expenses are 0, no expense found is rendered,
          Else we map the expenses into ExpenseItem */}
          {/* {filteredExpenses.length === 0 ? (<p>No expense found.</p>) : 
            (filteredExpenses.map((expense) => (
              <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount}
                date={expense.date}
              />
            )
          ))} */}
          {/* Easier way to do this is via the expensesContent variable defined above */}
          {/* {expensesContent} */}
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  )
}

export default Expenses