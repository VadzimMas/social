import styles from './Messages.module.scss';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMassage';

const Messages = (props) => {
    const messageElements = props.messages.map(el =>
        <Message
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            message={el.message}
            dispatch={props.dispatch}
        />
    )

    return (
        <div className={styles.messages}>
            {messageElements}
            <NewMessage
                newMessageText={props.newMessageText}
                addMessage={props.addMessage}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Messages
