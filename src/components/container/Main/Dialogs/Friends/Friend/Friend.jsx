import { NavLink } from 'react-router-dom';
import styles from './Friend.module.scss'

const Friend = (props) => {
    return (
        <NavLink
            to={'/dialogs/' + props.id}
            className={
                ({ isActive }) => isActive ? styles.active : ''}
        >
            {props.name}
        </NavLink>
    )
}

export default Friend