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
                firstName='Vad'
                lastName='Mas'
                birthday='10.07.1986'
                city='New York'
                education='hight school'
                webSite='https://vmweb.com'
            />
            <MyPost />
            <Messages
                likeCount='5'
                dislikeCount='2'
                message='lorem'
            />
            <Messages
                message='The idea behind -webkit-fill-available  at least at one point  was to allow for an element to intrinsically fit into a particular layout, i.e., fill the available space for that property. At the moment intrinsic values like this fully supported by the'
            />
            <Messages
                message='The idea behind -webkit-fill-available  at least at one point  was to allow for an element to intrinsically fit into a particular layout, i.e., fill the available space for that property. At the moment intrinsic values like this fully supported by the'
            />   <Messages
                message='The idea behind -webkit-fill-available  at least at one point  was to allow for an element to intrinsically fit into a particular layout, i.e., fill the available space for that property. At the moment intrinsic values like this fully supported by the'
            />   <Messages
                message='The idea behind -webkit-fill-available  at least at one point  was to allow for an element to intrinsically fit into a particular layout, i.e., fill the available space for that property. At the moment intrinsic values like this fully supported by the'
            />
        </div>
    )
}

export default Profile