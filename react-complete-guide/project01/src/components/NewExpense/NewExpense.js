import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    }
    const cancelFormHandler = (isCancel) => {
        setShowForm(!isCancel);
    }

    let newFormContent = <button onClick={() => setShowForm(true)}>Add New Expense</button>;
    if (showForm) {
        newFormContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelSubmit={cancelFormHandler} />;
    }

    return (
        <div className="new-expense">
            {newFormContent}
        </div>
    )
}
export default NewExpense;