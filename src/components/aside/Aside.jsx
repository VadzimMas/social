import styles from './aside.module.scss';

const Aside = () => {
    return (
        <aside className={styles.aside}>
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