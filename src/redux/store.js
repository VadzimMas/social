import userAvatar from '../img/shared/avatar.png'
import friendAvatar from '../img/shared/avatar.png'
import { renderApp } from '../index.js'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

const store = {
    _state: {
        profile: {
            posts: [
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
            ],
            users: {
                firstName: 'Vad',
                lastName: 'Mas',
                birthday: '10.07.1986',
                city: 'New York',
                education: 'high school',
                webSite: 'https://vmweb.com',
            },
            newPostText: '',
            addPost() {
                if (this.newPostText) {
                    let newPost = {
                        id: this.posts.length,
                        like: 0,
                        dislike: 0,
                        message: this.newPostText
                    }
                    this.posts.push(newPost)
                    this.newPostText = ''
                }
            },
            changeNewPostText(text) {
                this.newPostText = text
            },
            setLikesCount(id) {
                this.posts[id].like++
            },
            setDislikesCount(id) {
                this.posts[id].dislike++
            }
        },
        dialogs: {
            friends: [
                { id: 0, name: 'Bread' },
                { id: 1, name: 'Nick' },
                { id: 2, name: 'Donald' },
                { id: 3, name: 'Silvia' },
                { id: 4, name: 'Pamela' },
            ],
            messages: [
                {
                    id: 0,
                    avatar: userAvatar,
                    name: 'me',
                    message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
                },
                {
                    id: 1,
                    avatar: friendAvatar,
                    name: 'friend',
                    message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
                },
                {
                    id: 2,
                    avatar: userAvatar,
                    name: 'me',
                    message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
                },
                {
                    id: 3,
                    avatar: friendAvatar,
                    name: 'friend',
                    message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
                },
                {
                    id: 4,
                    avatar: userAvatar,
                    name: 'me',
                    message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
                },
                {
                    id: 5,
                    avatar: friendAvatar,
                    name: 'friend',
                    message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
                },
                {
                    id: 6,
                    avatar: userAvatar,
                    name: 'me',
                    message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
                },
                {
                    id: 7,
                    avatar: friendAvatar,
                    name: 'friend',
                    message: 'Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.Lorem ipsum dolor sit consectetur Non.',
                },

            ],
            newMessageText: '',
            changeNewMessageText(text) {
                this.newMessageText = text
            },
            addMessage() {
                if (this.newMessageText !== '') {
                    let newMessage = {
                        id: this.messages.length,
                        avatar: userAvatar,
                        name: 'me',
                        message: this.newMessageText,
                    }
                    this.messages.push(newMessage)
                    this.newMessageText = ''
                }
            },
        },
    },

    getState() { return this._state },

    dispatch(action) {
        profileReducer(store._state.profile, action)
        dialogsReducer(store._state.dialogs, action)
        renderApp()
    }
}

export default store


