// import profileReducer from "./profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Yeliazar"}, 
        {id: 2, name: "Alex"},
        {id: 3, name: "Julia"},
        {id: 4, name: "Natasha"},
        {id: 5, name: "Lena"},
        {id: 6, name: "Tanya"},
        {id: 7, name: "Marina"},
        {id: 8, name: "Yuriy"}
    ],

    Messages: [
        {id: 1, message: "Hi" },
        {id: 2, message: "How are you?"},
        {id: 3, message: "What is your favorite film?"},
        {id: 4, message: "What is your name?"},
        {id: 5, message: "What is your surname?"},
        {id: 6, message: "Wrere are you from?"},
        {id: 7, message: "How are you did it?"},
        {id: 8, message: "Are you succesfull person?"},
        {id: 9, message: "Where are your parents?"}
    ], 
    newMessageBody: ""
}; 

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: 
            return { 
                ...state, 
                newMessageBody: action.body
            };
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return { 
                ...state, 
                newMessageBody: '', 
                Messages: [...state.Messages, {id: 6, message: body}]
            };
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => 
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })

export default dialogsReducer;