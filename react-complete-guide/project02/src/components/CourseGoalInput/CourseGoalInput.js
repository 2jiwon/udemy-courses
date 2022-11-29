import './CourseGoalInput.css';
import { useState } from 'react';
import Button from '../UI/Button/Button';

const CourseGoalInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangeHandler = event => {
        // console.log(event.target.value);
        setEnteredValue(event.target.value);
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        // console.log(enteredValue);
        props.onAddGoal(enteredValue);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" placeholder='Enter your goal' onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseGoalInput;
