import s from './profile.module.scss'
import logo from '../../img/0.jpg'
import User from '../user/User';
import Posts from '../posts/Posts';

const Profile = () => {
    return (
        <div className={s.profile} >
            <img className={s.logo} src={logo} alt="" />
            <User />
            <Posts />
        </div>
    )
}

export default Profile