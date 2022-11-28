import styles from './Profile.module.scss'
import logo from '../../../../img/0.jpg'
import User from './User/User';
import NewPost from './NewPost/NewPost';
import Post from './Posts/Post.jsx';

const Profile = (props) => {
    const postElements = props.profile.posts.map(el =>
        <Post
            key={el.id}
            id={el.id}
            like={el.like}
            dislike={el.dislike}
            message={el.message}
            profile={props.profile}
        />
    )
    return (
        <div className={styles.profile} >
            <img className={styles.logo} src={logo} alt="" />
            <User
                firstName={props.profile.users.firstName}
                lastName={props.profile.users.lastName}
                birthday={props.profile.users.birthday}
                city={props.profile.users.city}
                education={props.profile.users.education}
                webSite={props.profile.users.webSite}
            />
            <NewPost
                userName={props.profile.users.firstName}
                addPost={props.profile.addPost}
                newPostText={props.profile.newPostText}
                changeNewPostText={props.profile.changeNewPostText}
            />
            {postElements}
        </div>
    )
}

export default Profile