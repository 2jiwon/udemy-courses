import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className="expenses">
            {
                props.data.map((e) =>
                    <ExpenseItem title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
                )
            }
        </div>
    );
}
export default Expenses;