import s from './posts.module.scss'
import btn from '../../styles/btn.module.scss'


const Posts = () => {
    return (
        <div className={s.posts}>
            <h2 className={s.header}>My Posts</h2>
            <textarea
                className={s.textArea}
                rows="4"
                cols="50"
                placeholder="your news ..."
            ></textarea>
            <input
                className={[btn.btn1, s.btn].join(' ')} type='submit'
            />
        </div>
    )
}

export default Posts