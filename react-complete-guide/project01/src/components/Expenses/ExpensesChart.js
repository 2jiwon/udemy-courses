import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    // Chart 컴포넌트에 전달되는 dataPoints 정의
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const chartDataPoints = Object.values(months).map((mon) => {
        return { label: mon, value: 0 }
    });

    for (const expense in props.expenses) {
        const expenseMonth = expense.date.getMonth(); // 0 부터 시작하므로 0은 Jan에 해당
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    // 여기에서 Chart 컴포넌트 반환
    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;