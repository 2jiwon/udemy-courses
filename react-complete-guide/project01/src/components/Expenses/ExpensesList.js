import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    let expensesContent = <p>No expenses found.</p>;
    if (props.items.length > 0) {
        expensesContent = props.items.length > 0 && props.items.map((e) =>
            <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
        );
    }
};

export default ExpensesList;
