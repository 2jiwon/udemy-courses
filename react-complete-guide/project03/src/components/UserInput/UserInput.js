import styles from './UserInput.module.css';
import { useState } from 'react';

const UserInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState(0);

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    }
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        const value = {
            name: enteredName,
            age: enteredAge
        };
        // console.log(value);
        props.onAddUser(value);
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles['form-control']}>
                <label>Username</label>
                <input type="text" onChange={nameChangeHandler} />
            </div>
            <div className={styles['form-control']}>
                <label>Age (Years)</label>
                <input type="number" onChange={ageChangeHandler} />
            </div>
            <button type="submit">Add User</button>
        </form>
    );
}
export default UserInput;