// import styled from 'styled-components';
import { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './CourseGoalInput.module.css';

// const FormControl = styled.div`
//       margin: 0.5rem 0;

//       & label {
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//         color: ${props => (props.invalid ? 'red' : 'black')};
//       }

//       & input {
//         display: block;
//         width: 100%;
//         border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//         background: ${props => (props.invalid ? 'cornsilk' : 'transparent')};
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//       }

//       & input:focus {
//         outline: none;
//         background: #fad0ec;
//         border-color: #8b005d;
//       }
// `;

const CourseGoalInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
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
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles['form-control']}>
                <label >Course Goal</label>
                <input type="text" placeholder='Enter your goal' onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseGoalInput;
