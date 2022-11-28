import styles from './Messages.module.scss';
import Message from './Message/Message';

const Messages = (props) => {
    const messageElements = props.messages.map(el =>
        <Message
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            message={el.message}
        />
    )

    return (
        <div className={styles.messages}>
            {messageElements}
        </div>
    )
}

export default Messages
