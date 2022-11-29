import './CourseGoalList.css';
import CourseGoalItem from './CourseGoalItem';

const CourseGoalList = (props) => {
    return (
        <ul className="goal-list">
            {props.items.map((el) => (
                <CourseGoalItem key={el.id} id={el.id} onDelete={props.onDeleteItem}>
                    {el.text}
                </CourseGoalItem>
            ))}
        </ul>
    )
}

export default CourseGoalList;