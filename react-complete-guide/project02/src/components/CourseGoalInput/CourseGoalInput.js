import './CourseGoalInput.css';
import { useState, useRef } from 'react';
import Button from '../UI/Button/Button';

const CourseGoalInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const inputRef = useRef();

    const goalInputChangeHandler = event => {
        // console.log(event.target.value); // 글자 입력할 때 마다 출력됨
        setEnteredValue(event.target.value);
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        // console.log(enteredValue);
        props.onAddGoal(enteredValue);
        inputRef.current.value = ""; // 폼 전송 후에 input 초기화
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" placeholder='Enter your goal' onChange={goalInputChangeHandler} ref={inputRef} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseGoalInput;
