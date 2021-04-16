import React from 'react';
import s from './MainPageProfile.module.css';

const MainPageProfile = (props) => {
    return (
    <div>
        <img className={s.MainPageProfile}  src={props.name}/>
    </div>
    )
}

export default MainPageProfile;


