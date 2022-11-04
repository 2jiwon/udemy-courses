
const CourseGoalList = (props) => {
    return (
        <ul>
            {props.items.map((el) => (
                <div key={el.id}>{el.text}</div>
            ))}
        </ul>
    )
}

export default CourseGoalList;