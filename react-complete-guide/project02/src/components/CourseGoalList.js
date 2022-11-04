import './CourseGoalList.css';
import CourseGoalItem from './CourseGoalItem';

const CourseGoalList = (props) => {
    return (
        <ul className="goal-list">
            {props.items.map((el) => (
                <CourseGoalItem key={el.id}>
                    {el.text}
                </CourseGoalItem>
            ))}
        </ul>
    )
}

export default CourseGoalList;