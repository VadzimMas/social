import s from './NewPost.module.scss'
import btn from '../../../../../styles/btn.module.scss'
import { useRef } from 'react';

const NewPost = (props) => {
    let newPostText = useRef(null);

    let onPostChange = () => {
        props.changeNewPostText(newPostText.current.value)
    }

    return (
        <div className={s.newPost}>
            <h2 className={s.header}>New Post</h2>
            <textarea
                className={s.textArea}
                ref={newPostText}
                value={props.newPostText}
                onChange={onPostChange}
                placeholder={props.userName + ' enter your new message here ...'}
            />
            <input
                className={[btn.btn1, s.btn].join(' ')}
                type='submit'
                onClick={props.addPost}
            />
        </div>
    )
}

export default NewPost