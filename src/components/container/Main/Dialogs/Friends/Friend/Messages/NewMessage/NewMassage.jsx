import styles from './NewMessage.module.scss';
import {
    changeNewMessageTextActionCreator,
    addMessageActionCreator
} from '../../../../../../../../redux/store.js';


const MassageInput = (props) => {
    function changeNewMessageText(e) {
        props.dispatch(changeNewMessageTextActionCreator(e))
    }
    const addMessage = (e) => {
        e.preventDefault()
        props.dispatch(addMessageActionCreator())
    }

    return (
        <form className={styles.MassageInput} action="">
            <textarea
                name=""
                value={props.newMessageText}
                onChange={(e) => changeNewMessageText(e)}
                placeholder='inter your massage ...'
            />
            <button
                type="submit"
                onClick={addMessage}
            >addMessage</button>
        </form>
    )
}

export default MassageInput