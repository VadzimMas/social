import Header from '../header/Header.jsx'
import Aside from '../aside/Aside.jsx'
import Main from '../main/Main.jsx';
import styles from './container.module.scss'

const Container = () => {
    return (
        <div className={styles.container} >
            <Header />
            <Aside />
            <Main />
        </div>


    )
}

export default Container