import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../components/asserts/images/user-male.png';
let Users = (props) => {

    let getUsers = ()  => {
    if(props.users.length === 0){

        
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger; 
            props.setUsers( response.data.items);
                    
            //     [{id: 1, photoUrl: 'https://expertphotography.com/wp-content/uploads/2018/07/posing-people-posing.jpg', followed: false,  fullName: "Vasya", status: "I am boss!", location: {city: "Minsk", country: "Belarus"}},
            //     {id: 2, photoUrl: 'https://lh3.googleusercontent.com/proxy/lD4g6gJoQGZibzhQkBUwimnwuzVCXyZxGKFqHfiib_imO6LPl84b_o8bbNb6Bjyzer6JjVpFvdR1eg7H2oCgvJzNRK4RcjA_-1rqLgPMfrJwxmJP5VGvVOl8GUryEzAqoNTGiRMk',  followed: true, fullName: "Pasha", status: "I am boss too!", location: {city: "Moscow", country: "Russia"}},
            //     {id: 3, photoUrl: 'https://i.pinimg.com/originals/62/6d/64/626d64c914d19b2601873f5f7cbd9de6.jpg', followed: true, fullName: "Natasha", status: "I am boss!", location: {city: "London", country: "Britain"}},
            //     {id: 4, photoUrl: 'https://i.pinimg.com/736x/78/08/58/7808589c937b68577d7f034ae1ab5a5c.jpg', followes: false,  fullName: "Olga", status: "I am boss too!", location: {city: "Amstedam", country: "Netherlands"}}]
        
        });

    }
}

    return (
    <div>
         <button onClick={getUsers}>Get Users</button>
        {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small: userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            { u.followed ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
        }
    </div>
)}
export default Users;