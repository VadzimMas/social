import styles from './User.module.scss';
import avatar from '../../../../../img/shared/avatar.png'

const User = (props) => {
    return (
        <div className={styles.user}>
            <img className={styles.avatar} src={avatar} alt="" />
            <div className={styles.info}>
                <div className={styles.name}>
                    <span className={styles.firstName}>{props.firstName}</span>
                    <span className={styles.lastName}>{props.lastName}</span>
                </div>
                <div className={styles.birthDate}>
                    <span>Date of Birth : </span>
                    <span>{props.birthday}</span>
                </div>
                <div className={styles.city}>
                    <span>City : </span>
                    <span>{props.city}</span>
                </div>
                <div className={styles.education}>
                    <span>Education : </span>
                    <span>{props.education}</span>
                </div>
                <div className={styles.site}>
                    <span>Web site : </span>
                    <span>{props.webSite}</span>
                </div>
            </div>
        </div>
    )
}

export default User