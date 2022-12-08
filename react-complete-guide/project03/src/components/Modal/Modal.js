import styles from './Modal.module.css';
import Button from '../UI/Button';

const Modal = (props) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm} />
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <div className={styles.footer}>
                    <Button onClick={props.onConfirm}>OK</Button>
                </div>
            </div>
        </div>
    );
}
export default Modal;