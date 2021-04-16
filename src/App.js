import React from "react";
import "./App.css";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
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

const App = (props) => {
  return (
    <BrowserRouter>
      <diV className="app-wrapper">
        <Header />
        <Nav />
        <div class="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer store={props.store} />} />
          <Route path="/profile" render={ () => <Profile store={props.store}/>} />
          <Route path="/users" render={ () => <UsersContainer store={props.store}/>} />
          <Route path="/forma" render={ () => <FormaContainer store={props.store}/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      
      </diV>
    </BrowserRouter>
  );
};

export default App;
