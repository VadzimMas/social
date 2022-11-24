import React from 'react'
import styles from './Dialogs.module.scss';
import userAvatar from '../../img/shared/avatar.png';
import friendAvatar from '../../img/shared/avatar.png';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <h2 className={styles.header}>Dialogs</h2>
            <ul className={styles.friends}>
                <li><a href="#">Bread</a></li>
                <li><a href="#">Nick</a></li>
                <li><a href="#">Donald</a></li>
                <li><a href="#">Silvia</a></li>
                <li><a href="#">Pamela</a></li>
            </ul>
            <ul className={styles.messages}>
                <li className={[styles.user, styles.person].join(' ')}>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="" />
                        <span>Me</span>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                    </p>
                </li>
                <li className={[styles.friend, styles.person].join(' ')}>
                    <div className={styles.avatar}>
                        <img src={friendAvatar} alt="" />
                        <span>friend</span>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                    </p>
                </li>
                <li className={[styles.user, styles.person].join(' ')}>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="" />
                        <span>Me</span>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                    </p>
                </li>
                <li className={[styles.friend, styles.person].join(' ')}>
                    <div className={styles.avatar}>
                        <img src={friendAvatar} alt="" />
                        <span>friend</span>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                    </p>
                </li>
                <li className={[styles.user, styles.person].join(' ')}>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="" />
                        <span>Me</span>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                    </p>
                </li>
                <li className={[styles.friend, styles.person].join(' ')}>
                    <div className={styles.avatar}>
                        <img src={friendAvatar} alt="" />
                        <span>friend</span>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                    </p>
                </li>      <li className={[styles.user, styles.person].join(' ')}>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="" />
                        <span>Me</span>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                    </p>
                </li>
                <li className={[styles.friend, styles.person].join(' ')}>
                    <div className={styles.avatar}>
                        <img src={friendAvatar} alt="" />
                        <span>friend</span>
                    </div>
                    <p className={styles.message}>
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                        Lorem ipsum dolor sit consectetur Non.
                    </p>
                </li>
            </ul>

        </div>
    )
}

export default Dialogs