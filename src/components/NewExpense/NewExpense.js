import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        /* Same name as object from ExpenseForm (expenseData) */
        /* Also ...enteredExpenseData is the data values from that object in ExpenseForm (expenseData) */
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    const startEditingHandler = () => {
      setIsEditing(true)
    }

    /* We want to trigger this function if the cancel button is pressed in ExpenseForm */
    const stopEditingHandler = () => {
      setIsEditing(false)
    }
    

  return (
    <div className="new-expense">
      {/* Below is a simple terniray. If isEditing is false, do whats after && - One below is the opposite */}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
  )
}

export default NewExpense;