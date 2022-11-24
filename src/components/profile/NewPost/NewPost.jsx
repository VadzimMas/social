import s from './NewPost.module.scss'
import btn from '../../../styles/btn.module.scss'

const NewPost = (props) => {
    return (
        <div className={s.newPost}>
            <h2 className={s.header}>New Post</h2>
            <textarea
                className={s.textArea}
                rows="4"
                cols="50"
                placeholder={props.userName + ' enter your new message here ...'}
            ></textarea>
            <input
                className={[btn.btn1, s.btn].join(' ')} type='submit'
            />
        </div>
    )
}

export default NewPost