import styles from './Main.module.scss'
import Profile from './Profile/Profile.jsx'
import Dialogs from './Dialogs/Dialogs.jsx'
import { Routes, Route } from 'react-router-dom'


const Main = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path='/profile/*' element={<Profile />} />
                <Route path='/dialogs/*' element={<Dialogs />} />
            </Routes>
        </main>
    )
}

export default Main