/* eslint-disable default-case */
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostData: [
        {id: 1, message: "Hi, how are you?", likeCounts: 12},
        {id: 2, message: "it's my first post", likeCounts: 11},
        {id: 3, message: "it's my second post", likeCounts: 21}
        ], 
    newPostText: 'Hi! I\'m happy that you here'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, 
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state, 
                PostData : [...state.PostData, newPost], 
                newPostText : ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, 
                newPostText: action.newText
            };
        }
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
 ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;