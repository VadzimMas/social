import styles from './Messages.module.scss';
import userAvatar from '../../../img/shared/avatar.png';
import friendAvatar from '../../../img/shared/avatar.png';

const Messages = () => {
    return (
        <div className={styles.messages}>
            <div className={[styles.user, styles.person].join(' ')}>
                <div className={styles.avatar}>
                    <img src={userAvatar} alt="" />
                    <span>Me</span>
                </div>
                <p className={styles.message}>
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                </p>
            </div>
            <div className={[styles.friend, styles.person].join(' ')}>
                <div className={styles.avatar}>
                    <img src={friendAvatar} alt="" />
                    <span>friend</span>
                </div>
                <p className={styles.message}>
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                </p>
            </div>
            <div className={[styles.user, styles.person].join(' ')}>
                <div className={styles.avatar}>
                    <img src={userAvatar} alt="" />
                    <span>Me</span>
                </div>
                <p className={styles.message}>
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                </p>
            </div>
            <div className={[styles.friend, styles.person].join(' ')}>
                <div className={styles.avatar}>
                    <img src={friendAvatar} alt="" />
                    <span>friend</span>
                </div>
                <p className={styles.message}>
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                </p>
            </div>
            <div className={[styles.user, styles.person].join(' ')}>
                <div className={styles.avatar}>
                    <img src={userAvatar} alt="" />
                    <span>Me</span>
                </div>
                <p className={styles.message}>
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                </p>
            </div>
            <div className={[styles.friend, styles.person].join(' ')}>
                <div className={styles.avatar}>
                    <img src={friendAvatar} alt="" />
                    <span>friend</span>
                </div>
                <p className={styles.message}>
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                </p>
            </div>
            <div className={[styles.user, styles.person].join(' ')}>
                <div className={styles.avatar}>
                    <img src={userAvatar} alt="" />
                    <span>Me</span>
                </div>
                <p className={styles.message}>
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                </p>
            </div>
            <div className={[styles.friend, styles.person].join(' ')}>
                <div className={styles.avatar}>
                    <img src={friendAvatar} alt="" />
                    <span>friend</span>
                </div>
                <p className={styles.message}>
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                    Lorem ipsum dolor sit consectetur Non.
                </p>
            </div>
        </div>

    )
}

export default Messages
