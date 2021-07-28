import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from './../asserts/images/logo.jpg';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://static.eurovision.tv/hb-cgi/images/8f3ce2a7-764d-4ff0-bb35-2b87c1c7a6ee/hero.png'/>
        
        <div className={s.loginBlock}>
            {props.isAuth ? <span> <img src={logo}/> {props.login} </span>
              : <NavLink to={'/login'}> 
                    <div> 
                      <img src={logo}/> <p>Login</p>
                    </div>
                </NavLink>}

        </div>
  </header>
}

export default Header;