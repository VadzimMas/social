const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_LIKES_COUNT = 'SET-LIKES-COUNT'
const SET_DISLIKES_COUNT = 'SET-DISLIKES-COUNT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.addPost()
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.changeNewPostText(action.text)
            return state;
        case SET_LIKES_COUNT:
            state.setLikesCount(action.id)
            return state;
        case SET_DISLIKES_COUNT:
            state.setDislikesCount(action.id)
            return state;
        default:
            return state
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


export default profileReducer