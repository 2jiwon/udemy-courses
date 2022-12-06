import './CourseGoalInput.css';
import { useState, useRef } from 'react';
import Button from '../UI/Button/Button';

const CourseGoalInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const inputRef = useRef();
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        // console.log(event.target.value); // 글자 입력할 때 마다 출력됨

        // 입력값이 있으면 valid를 true로 설정
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        // 입력된 값이 없으면 실행을 중단 -> 빈 값으로 목록 생성 방지
        if (enteredValue.trim().length === 0) {
            // 입력값이 없으면 valid를 false로 설정
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
        inputRef.current.value = ""; // 폼 전송 후에 input 초기화
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
                <label >Course Goal</label>
                <input type="text" placeholder='Enter your goal' onChange={goalInputChangeHandler} ref={inputRef} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseGoalInput;
