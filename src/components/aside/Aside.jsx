import s from './Aside.module.scss'
import { NavLink } from 'react-router-dom';

const Aside = (props) => {
    return (
        <aside className={s.aside}>
            <nav>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/dialogs'>Dialogs</NavLink>
                <a href='/news'>News</a>
                <a href='/music'>Music</a>
                <a href='/settings'>Settings</a>
            </nav>
        </aside>
    )
}

export default Aside