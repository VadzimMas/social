import styles from './header.module.scss'
import avatar from '../../img/shared/avatar.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <img src={avatar} alt="avatar" />
                <a href="#">Home</a>
                <a href="#">News Feed</a>
                <a href="#">Messages</a>
            </nav>
        </header>
    )
}

export default Header