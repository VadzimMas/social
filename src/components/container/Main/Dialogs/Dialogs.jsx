import React from 'react'
import styles from './Dialogs.module.scss';
import Friends from './Friends/Friends';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <h2 className={styles.header}>Dialogs</h2>
            <Friends
                friends={props.dialogs.friends}
            />
            <Messages
                messages={props.dialogs.messages}
            />
        </div>
    )
}

export default Dialogs