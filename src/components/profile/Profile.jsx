import s from './profile.module.scss'
import logo from '../../img/0.jpg'
import User from '../user/User';
import MyPost from '../posts/MyPost';
import Messages from '../messages/Messages';

const Profile = () => {
    return (
        <div className={s.profile} >
            <img className={s.logo} src={logo} alt="" />
            <User
                firstName='Vadzim'
                lastName='Mas'
                birthday='10.07.1986'
                city='Mosty'
                education='hight school'
                webSite='https://vmweb.com'
            />
            <MyPost />
            <Messages
                likeCount='5'
                dislikeCount='2'
                message='rc/components/user/User.jsx
  Line 7:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images'
            />
            <Messages
                message='rc/components/user/User.jsx
  Line 7:13:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images'
            />
        </div>
    )
}

export default Profile