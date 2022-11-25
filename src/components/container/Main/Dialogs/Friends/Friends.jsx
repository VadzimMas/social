import styles from './Friends.module.scss';
import Friend from './Friend/Friend';

const friendsData = [
    { id: 0, name: 'Bread' },
    { id: 1, name: 'Nick' },
    { id: 2, name: 'Donald' },
    { id: 3, name: 'Silvia' },
    { id: 4, name: 'Pamela' },
]

const friendElements = friendsData.map(el =>
    <Friend
        id={el.id}
        name={el.name}
    />
)

const Friends = () => {
    return (
        <div className={styles.friends}>
            {friendElements}
        </div>
    )
}

export default Friends