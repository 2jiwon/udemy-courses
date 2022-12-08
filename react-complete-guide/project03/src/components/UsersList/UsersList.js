import styles from './UsersList.module.css';
import User from '../User/User';

const UsersList = (props) => {
    return (
        <ul className={styles['users-list']}>
            {props.list.map(el => (
                <User key={el.id}>{el.name} {el.age}</User>
            ))}
        </ul>
    );
}

export default UsersList;