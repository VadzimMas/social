import styles from './NewPost.module.scss'
import btn from '../../../../../styles/btn.module.scss'
import {
    addPostActionCreator,
    changeNewPostTextActionCreator
} from '../../../../../redux/store';

const NewPost = (props) => {
    function changeNewPostText(e) {
        props.dispatch(changeNewPostTextActionCreator(e))
    }

    function addPost() {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className={styles.newPost}>
            <h2 className={styles.header}>New Post</h2>
            <textarea
                className={styles.textArea}
                value={props.newPostText}
                onChange={(e) => changeNewPostText(e)}
                placeholder={props.userName + ' enter your new message here ...'}
            />
            <button
                className={[btn.btn1, styles.btn].join(' ')}
                type='submit'
                onClick={addPost}
            >addPost</button>
        </div>
    )
}

export default NewPost