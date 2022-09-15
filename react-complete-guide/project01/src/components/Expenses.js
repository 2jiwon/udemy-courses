import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            {
                props.data.map((e) =>
                    <ExpenseItem title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
                )
            }
        </Card>
    );
}
export default Expenses;