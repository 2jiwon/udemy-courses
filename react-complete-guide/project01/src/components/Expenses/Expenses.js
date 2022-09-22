import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredData, setFilteredData] = useState(props.data);
    const filterSelectHandler = (selectedData) => {
        setFilteredData(props.data);
        if (selectedData !== "") {
            setFilteredData(props.data.filter((d) =>
                d.date.getFullYear().toString() === selectedData
            ));
        }
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterSelected={filterSelectHandler} />
            {
                filteredData.map((e) =>
                    <ExpenseItem title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
                )
            }
        </Card>
    );
}
export default Expenses;