import Header from './Header/Header.jsx'
import Aside from './Aside/Aside.jsx'
import Main from './Main/Main.jsx';
import styles from './Container.module.scss'
import { Routes, Route } from 'react-router-dom';


const Container = (props) => {

    return (
        <div className={styles.container} >
            <Header />
            <Aside />
            <Routes>
                <Route
                    path='/social/*'
                    element={
                        <Main store={props.store} />
                    }
                />
            </Routes>
        </div >
    )
}

export default Container