import styles from './User.module.css';

const User = (props) => {
    const deleteHandler = () => {
        console.log("delete this ", props.id);
    }
    return (
        <li className={styles.user} onClick={deleteHandler}>{props.children}</li>
    );
}

export default User;