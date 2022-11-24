import s from './Profile.module.scss'
import logo from '../../img/0.jpg'
import User from './User/User';
import NewPost from './NewPost/NewPost';
import Messages from './Posts/Post';

const Profile = () => {

    const user = {
        firstName: 'Vad',
        lastName: 'Mas',
        birthday: '10.07.1986',
        city: 'New York',
        education: 'high school',
        webSite: 'https://vmweb.com',
    }


    return (
        <div className={s.profile} >
            <img className={s.logo} src={logo} alt="" />
            <User
                firstName={user.firstName}
                lastName={user.lastName}
                birthday={user.birthday}
                city={user.city}
                education={user.education}
                webSite={user.webSite}
            />
            <NewPost
                userName={user.firstName}

            />
            <Messages
                message=' fill the available space for that property. At the moment intrinsic values like this fully supported by the'
            />
            <Messages
                message='The idea  supported by the'
            />
            <Messages
                message='The idea behind -webkit-fill-available  at least at one point  was to allow for an element to intrinsically fit into a particular layout, i.e., fill the available space for that property. At the moment intrinsic values like this fully supported by the'
            />
            <Messages
                message='The idea behind -webkit-fill-available  at least at one point  was to allow for an element to intrinsically fit into a particular layout, i.e., fill the available space for that property. At the moment intrinsic values like this fully supported by the'
            />
        </div>
    )
}

export default Profile