import Header from '../header/Header.jsx'
import Aside from '../aside/Aside.jsx'
import Main from '../main/Main.jsx';
import styles from './container.module.scss'

const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('load', setVh);
window.addEventListener('resize', setVh);


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