import './CourseGoalInput.css';
import Button from './UI/Button/Button';

const CourseGoalInput = (props) => {
    return (
        <form onSubmit="">
            <div class="form-control">
                <input type="text" placeholder='Enter your goal' />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseGoalInput;
