import s from './messages.module.scss'
import avatar from '../../img/shared/avatar.png'

const Messages = () => {
    return (
        <div className={s.message}>
            <img src={avatar} alt="" />
            <p>
                dit, quasi perferendis temporibus aliquam perspiciatis tenetur. Minus eveniet quas vel, eligendi voluptate doloribus corporis harum ducimus laudantium alias omnis adipisci culpa sunt quae beatae dolorum rerum consectetur labore?
            </p>
        </div>
    )
}

export default Messages

