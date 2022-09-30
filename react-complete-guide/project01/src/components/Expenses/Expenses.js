import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('');
    const [filteredItems, setFilteredItems] = useState(props.items);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        setFilteredItems(props.items.filter((e) =>
            (selectedYear === '') ? e : e.date.getFullYear().toString() === selectedYear
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                filteredItems.map((e) =>
                    <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
                )
            }
        </Card>
    );
}
export default Expenses;