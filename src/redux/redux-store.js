import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import formaReducer from "./forma-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({ 
    profilePage: profileReducer, 
    messagesPage: dialogsReducer,
    formaDataPage: formaReducer, 
    sidebar: sidebarReducer, 
    usersPage: usersReducer, 
    auth: authReducer
});

let store = createStore(reducers);

window.store = store; 

export default store; 