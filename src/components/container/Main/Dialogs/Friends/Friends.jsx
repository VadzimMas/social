import styles from './Friends.module.scss';
import Friend from './Friend/Friend';
import { Route } from 'react-router-dom'


const Friends = (props) => {
    const friendElements = props.friends.map(el =>
        <Friend
            key={el.id}
            id={el.id}
            name={el.name}
        />

    )

    return (
        <div className={styles.friends}>
            {friendElements}
        </div>
    )
}

export default Friends