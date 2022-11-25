import styles from './Messages.module.scss';
import Message from './Message/Message';
import userAvatar from '../../../../../img/shared/avatar.png';
import friendAvatar from '../../../../../img/shared/avatar.png';

const messagesData = [
    {
        id: 0,
        avatar: userAvatar,
        name: 'me',
        message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
    },
    {
        id: 1,
        avatar: friendAvatar,
        name: 'friend',
        message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
    },
    {
        id: 2,
        avatar: userAvatar,
        name: 'me',
        message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
    },
    {
        id: 3,
        avatar: friendAvatar,
        name: 'friend',
        message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
    },
    {
        id: 4,
        avatar: userAvatar,
        name: 'me',
        message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
    },
    {
        id: 5,
        avatar: friendAvatar,
        name: 'friend',
        message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
    },
    {
        id: 6,
        avatar: userAvatar,
        name: 'me',
        message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
    },
    {
        id: 7,
        avatar: friendAvatar,
        name: 'friend',
        message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
    },

]

const messageElements = messagesData.map(el =>
    <Message
        key={el.id}
        avatar={el.avatar}
        name={el.name}
        message={el.message}
    />
)

const Messages = () => {
    return (
        <div className={styles.messages}>
            {messageElements}
        </div>
    )
}

export default Messages
