import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return (filteredYear === '') ? expense : expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.length > 0 && filteredExpenses.map((e) =>
            <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
        );
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    );
}
export default Expenses;