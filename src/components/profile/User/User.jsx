import s from './User.module.scss';
import avatar from '../../../img/shared/avatar.png'

const User = (props) => {
    return (
        <div className={s.user}>
            <img className={s.avatar} src={avatar} alt="" />
            <div className={s.info}>
                <div className={s.name}>
                    <span className={s.firstName}>{props.firstName}</span>
                    <span className={s.lastName}>{props.lastName}</span>
                </div>
                <div className={s.birthDate}>
                    <span>Date of Birth : </span>
                    <span>{props.birthday}</span>
                </div>
                <div className={s.city}>
                    <span>City : </span>
                    <span>{props.city}</span>
                </div>
                <div className={s.education}>
                    <span>Education : </span>
                    <span>{props.education}</span>
                </div>
                <div className={s.site}>
                    <span>Web site : </span>
                    <span>{props.webSite}</span>
                </div>
            </div>
        </div>
    )
}

export default User