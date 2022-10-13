import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    // maxValue 계산
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    // ChartBar를 여기에서 렌더링
    return <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        ))}
    </div>
};

export default Chart;