import s from './Post.module.scss'
import avatar from '../../../../../img/shared/avatar.png'
import like from '../../../../../img/like.svg'
import dislike from '../../../../../img/dislike.svg'
import { useState } from 'react'

const Post = (props) => {

    const [likeCount, setLikeCount] = useState(props.like);
    const [dislikeCount, setDislikeCount] = useState(props.dislike);

    return (
        <div className={s.post}>
            <div className={s.left}>
                <img className={s.avatar} src={avatar} alt="" />
                <div className={s.like}>
                    <img
                        src={like}
                        alt=""
                        onClick={() => { setLikeCount(likeCount + 1) }}
                    />
                    <span>{likeCount}</span>
                </div>
                <div className={s.dislike}>
                    <img src={dislike}
                        alt=""
                        onClick={() => { setDislikeCount(dislikeCount + 1) }}
                    />
                    <span>{dislikeCount}</span>
                </div>
            </div>
            <p className={s.right}>{props.message}</p>
        </div>
    )
}

export default Post

