import Header from './Header/Header.jsx'
import Aside from './Aside/Aside.jsx'
import Main from './Main/Main.jsx';
import styles from './Container.module.scss'

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