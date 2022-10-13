import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return (filteredYear === '') ? expense : expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}
export default Expenses;