import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(props.items);
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterSelected={filterChangeHandler} />
            {
                props.items.map((e) =>
                    <ExpenseItem title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
                )
            }
        </Card>
    );
}
export default Expenses;