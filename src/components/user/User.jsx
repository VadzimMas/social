import s from './user.module.scss';
import avatar from '../../img/shared/avatar.png'

const User = () => {
    return (
        <div className={s.user}>
            <img className={s.avatar} src={avatar} />
            <div className={s.info}>
                <div className={s.name}>
                    <span className={s.firstName}>Vadzim</span>
                    <span className={s.lastName}>Mas</span>
                </div>
                <div className={s.birthDate}>
                    <span>Date of Birth : </span>
                    <span></span>
                </div>
                <div className={s.city}>
                    <span>City : </span>
                    <span></span>
                </div>
                <div className={s.education}>
                    <span>Education : </span>
                    <span></span>
                </div>
                <div className={s.site}>
                    <span>Web site : </span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default User