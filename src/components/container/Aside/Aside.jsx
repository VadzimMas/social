import styles from './Aside.module.scss'
import { NavLink } from 'react-router-dom';

const Aside = (props) => {
    return (
        <aside className={styles.aside}>
            <nav>
                <NavLink
                    to='social/profile/'
                    className={
                        ({ isActive }) => isActive ? styles.active : ""
                    }
                >Profile</NavLink>
                <NavLink
                    to='social/dialogs/'
                    className={
                        ({ isActive }) => isActive ? styles.active : ""
                    }
                >Dialogs</NavLink>
                <a href='/news'>News</a>
                <a href='/music'>Music</a>
                <a href='/settings'>Settings</a>
            </nav>
        </aside >
    )
}

export default Aside