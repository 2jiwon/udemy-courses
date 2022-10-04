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

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                filteredExpenses.map((e) =>
                    <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
                )
            }
        </Card>
    );
}
export default Expenses;