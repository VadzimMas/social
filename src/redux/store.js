import userAvatar from '../img/shared/avatar.png'
import friendAvatar from '../img/shared/avatar.png'
import { renderApp } from '../index.js'

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_LIKES_COUNT = 'SET-LIKES-COUNT'
const SET_DISLIKES_COUNT = 'SET-DISLIKES-COUNT'
const CHANGE_NEW_MASSAGE_TEXT = 'CHANGE-NEW-MASSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'




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
                let newPost = {
                    id: store._state.profile.posts.length,
                    like: 0,
                    dislike: 0,
                    message: store._state.profile.newPostText
                }
                store._state.profile.posts.push(newPost)
                store._state.profile.newPostText = ''
                renderApp()
            },
            changeNewPostText(text) {
                store._state.profile.newPostText = text
                renderApp()
            },
            setLikesCount(id) {
                store._state.profile.posts[id].like++
                renderApp()
            },
            setDislikesCount(id) {
                store._state.profile.posts[id].dislike++
                renderApp()
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
                store._state.dialogs.newMessageText = text
                renderApp()
            },
            addMessage() {
                let newMessage = {
                    id: store._state.dialogs.messages.length,
                    avatar: userAvatar,
                    name: 'me',
                    message: store._state.dialogs.newMessageText,
                }
                store._state.dialogs.messages.push(newMessage)
                store._state.dialogs.messages.newMessageText = ''
                renderApp()
            },
        },
    },

    getState() { return this._state },

    dispatch(action) {
        if
            (action.type === ADD_POST) {
            store._state.profile.addPost()
        }
        else if
            (action.type === CHANGE_NEW_POST_TEXT) {
            store._state.profile.changeNewPostText(action.text)
        }
        else if
            (action.type === SET_LIKES_COUNT) {
            store._state.profile.setLikesCount(action.id)
        }
        else if
            (action.type === SET_DISLIKES_COUNT) {
            store._state.profile.setDislikesCount(action.id)
        }
        else if
            (action.type === CHANGE_NEW_MASSAGE_TEXT) {
            store._state.dialogs.changeNewMessageText(action.text)
        }
        else if
            (action.type === ADD_MESSAGE) {
            store._state.dialogs.addMessage()
        }
    }
}

export function addPostActionCreator() {
    return { type: ADD_POST }
}

export function changeNewPostTextActionCreator(e) {
    return {
        type: CHANGE_NEW_POST_TEXT,
        text: e.target.value
    }
}

export function setLikesCountActionCreator(id) {
    return {
        type: SET_LIKES_COUNT, id: id
    }
}

export function setDislikesCountActionCreator(id) {
    return {
        type: SET_DISLIKES_COUNT, id: id
    }
}

export function changeNewMessageTextActionCreator(e) {
    return {
        type: CHANGE_NEW_MASSAGE_TEXT,
        text: e.target.value
    }
}
export function addMessageActionCreator() {
    return { type: ADD_MESSAGE }
}

export default store


