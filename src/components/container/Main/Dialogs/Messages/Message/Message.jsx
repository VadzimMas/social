import styles from './Message.module.scss';
const Message = (props) => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt="" />
                <span>{props.name}</span>
            </div>
            <p>{props.message}</p>
        </div>
    )
}

export default Message