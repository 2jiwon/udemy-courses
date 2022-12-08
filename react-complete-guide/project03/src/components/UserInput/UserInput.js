import styles from './UserInput.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Button from '../UI/Button';

const UserInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    }
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age.'
            });
            return;
        }
        if (enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age.'
            });
            return;
        }
        const value = {
            name: enteredName,
            age: enteredAge
        };
        // console.log(value);
        props.onAddUser(value);
        setEnteredName('');
        setEnteredAge('');
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && (
                <Modal title={error.title} message={error.message} onConfirm={errorHandler} />
            )}
            <form onSubmit={formSubmitHandler}>
                <div className={styles['form-control']}>
                    <label>Username</label>
                    <input type="text" onChange={nameChangeHandler} value={enteredName} />
                </div>
                <div className={styles['form-control']}>
                    <label>Age (Years)</label>
                    <input type="number" onChange={ageChangeHandler} value={enteredAge} />
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </div>
    );
}
export default UserInput;