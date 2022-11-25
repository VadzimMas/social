import s from './Profile.module.scss'
import logo from '../../../../img/0.jpg'
import User from './User/User';
import NewPost from './NewPost/NewPost';
import Post from './Posts/Post.jsx';

const Profile = () => {

    const user = {
        firstName: 'Vad',
        lastName: 'Mas',
        birthday: '10.07.1986',
        city: 'New York',
        education: 'high school',
        webSite: 'https://vmweb.com',
    }

    const postsData = [
        {
            id: 0,
            like: 23,
            dislike: 12,
            message: ' fill the available space for that property. At the moment intrinsic values like this fully supported by the'
        },
        {
            id: 1,
            like: 33,
            dislike: 122,
            message: 'The idea  supported by the'
        },
        {
            id: 2,
            like: 223,
            dislike: 432,
            message: 'The idea behind -webkit-fill-available  at least at one point  was to allow for an element to intrinsically fit into a particular layout, i.e., fill the available space for that property. At the moment intrinsic values like this fully supported by the'
        },
        {
            id: 3,
            like: 23,
            dislike: 43,
            message: ' fill the available space for that property. At the moment intrinsic values like this fully supported by the'
        },
        {
            id: 4,
            like: 33,
            dislike: 93,
            message: 'The idea  supported by the'
        },
        {
            id: 5,
            like: 63,
            dislike: 67,
            message: 'The idea behind -webkit-fill-available  at least at one point  was to allow for an element to intrinsically fit into a particular layout, i.e., fill the available space for that property. At the moment intrinsic values like this fully supported by the'
        },
    ]
    const postElements = postsData.map(post =>
        <Post
            id={post.id}
            like={post.like}
            dislike={post.dislike}
            message={post.message}
        />
    )


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
            <NewPost userName={user.firstName} />

            {postElements}

        </div>
    )
}

export default Profile