import React from "react";
import "./App.css";

//import Profile from "./components/Profile/Profile";
//import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
//import Users from "./components/Users/Users";
//import Forma from "./components/forma/Forma";
import FormaContainer from "./components/forma/FormaContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer store={props.store} />} />
          <Route path="/profile/:userId?" render={ () => <ProfileContainer store={props.store}/>} />
          <Route path="/users" render={ () => <UsersContainer store={props.store}/>} />
          <Route path="/forma" render={ () => <FormaContainer store={props.store}/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
