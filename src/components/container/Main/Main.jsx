import styles from './Main.module.scss'
import Profile from './Profile/Profile.jsx'
import Dialogs from './Dialogs/Dialogs.jsx'
import { Routes, Route } from 'react-router-dom'





const Main = (props) => {

    return (
        <main className={styles.main}>
            <Routes>
                <Route
                    path='/profile/*'
                    element={
                        <Profile
                            profile={props.store.getState().profile}
                        />
                    }
                />
                <Route
                    path='/dialogs/*'
                    element={
                        <Dialogs
                            dialogs={props.store.getState().dialogs}
                        />
                    }

                />
            </Routes>
        </main>
    )
}

export default Main