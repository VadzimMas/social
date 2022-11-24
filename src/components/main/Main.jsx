import styles from './Main.module.scss'
import Profile from '../Profile/Profile'
import Dialogs from '../Dialogs/Dialogs'
import ReactDOM from "react-dom"
import { Routes, Route } from 'react-router-dom'


const Main = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/dialogs' element={<Dialogs />} />
            </Routes>
        </main>
    )
}

export default Main