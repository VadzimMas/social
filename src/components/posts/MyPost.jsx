import s from './myPost.module.scss'
import btn from '../../styles/btn.module.scss'

const MyPost = () => {
    return (
        <div className={s.myPost}>
            <h2 className={s.header}>My Post</h2>
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

export default MyPost