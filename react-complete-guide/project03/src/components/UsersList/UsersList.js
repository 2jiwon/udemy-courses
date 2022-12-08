import styles from './UsersList.module.css';
import User from '../User/User';

const UsersList = (props) => {
    return (
        <ul className={styles['users-list']}>
            {props.list.map(el => (
                <User key={el.id} id={el.id} onDelete={props.onDeleteUser}>{el.name} ({el.age} years old)</User>
            ))}
        </ul>
    );
}

export default UsersList;