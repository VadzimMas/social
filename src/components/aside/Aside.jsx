import s from './Aside.module.scss'

const Aside = (props) => {
    return (
        <aside className={s.aside}>
            <nav>
                <a href='#'>Profile</a>
                <a href='#'>Messages</a>
                <a href='#'>News</a>
                <a href='#'>Music</a>
                <a href='#'>Settings</a>
            </nav>
        </aside>
    )
}

export default Aside