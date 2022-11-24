import styles from './Main.module.scss'
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';

const Main = () => {
    return (
        <main className={styles.main}>
            {/* <Profile /> */}
            <Dialogs />

        </main>
    )
}

export default Main