import s from './profile.module.scss'
import logo from '../../img/0.jpg'
import User from '../user/User';
import MyPost from '../posts/MyPost';
import Messages from '../messages/Messages';

const Profile = () => {
    return (
        <div className={s.profile} >
            <img className={s.logo} src={logo} alt="" />
            <User />
            <MyPost />
            <Messages />
            <Messages />
        </div>
    )
}

export default Profile