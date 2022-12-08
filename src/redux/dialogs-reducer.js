const CHANGE_NEW_MASSAGE_TEXT = 'CHANGE-NEW-MASSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NEW_MASSAGE_TEXT:
            state.changeNewMessageText(action.text)
            return state
        case ADD_MESSAGE:
            state.addMessage()
            return state
        default:
            return state
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

export default dialogsReducer