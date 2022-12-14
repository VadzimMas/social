import styles from './Post.module.scss'
import avatar from '../../../../../img/shared/avatar.png'
import like from '../../../../../img/like.svg'
import dislike from '../../../../../img/dislike.svg'
import {
    setLikesCountActionCreator,
    setDislikesCountActionCreator
} from '../../../../../redux/profile-reducer.js';

const Post = (props) => {

    function setLikesCount() {
        props.dispatch(setLikesCountActionCreator(props.id))
    }

    function setDislikesCount() {
        props.dispatch(setDislikesCountActionCreator(props.id))
    }

    return (
        <div className={styles.post}>
            <div className={styles.left}>
                <img className={styles.avatar} src={avatar} alt="" />
                <div className={styles.like}>
                    <img
                        src={like}
                        alt=""
                        onClick={setLikesCount}
                    />
                    <span>{props.like}</span>
                </div>
                <div className={styles.dislike}>
                    <img
                        src={dislike}
                        alt=""
                        onClick={setDislikesCount}
                    />
                    <span>{props.dislike}</span>
                </div>
            </div>
            <p className={styles.right}>{props.message}</p>
        </div>
    )
}

export default Post

