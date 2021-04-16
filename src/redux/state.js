
import Post from "../components/Profile/MyPosts/Posts/Post";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./Sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            PostData: [
                {id: 1, message: "Hi, how are you?", likeCounts: 12},
                {id: 2, message: "it's my first post", likeCounts: 11},
                {id: 3, message: "it's my second post", likeCounts: 21}
                ], 
            newPostText: 'Hi! I\'m happy that you here'
        },
        messagesPage: {
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
        },  
        sidebar: {}
    },
    _callSubscriber() {}, 
    getState(){
        return this._state; 
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }, 
    dispatch(action){

        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.messagesPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(store._state);
    }
} 








window.store = store;

export default store;