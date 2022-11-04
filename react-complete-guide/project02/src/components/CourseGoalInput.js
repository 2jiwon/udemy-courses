import './CourseGoalInput.css';

const CourseGoalInput = (props) => {
    return (
        <form onSubmit="">
            <div class="form-control">
                <input type="text" placeholder='Enter your goal' />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default CourseGoalInput;
