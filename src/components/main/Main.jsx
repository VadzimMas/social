import styles from './main.module.scss'
import Profile from '../profile/Profile';

const Main = () => {
    return (
        <main className={styles.main}>
            <Profile />
        </main>
    )
}

export default Main