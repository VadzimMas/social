import React from 'react'
import styles from './Dialogs.module.scss';
import Friends from './Friends/Friends';
import Messages from './Friends/Friend/Messages/Messages';


const Dialogs = (props) => {

    return (
        <div className={styles.dialogs}>
            <h2 className={styles.header}>Dialogs</h2>
            <Friends
                friends={props.dialogs.friends}
                dispatch={props.dispatch}
            />
            <Messages
                messages={props.dialogs.messages}
                newMessageText={props.dialogs.newMessageText}
                addMessage={props.dialogs.addMessage}
                dispatch={props.dispatch}
            />

        </div>
    )
}

export default Dialogs