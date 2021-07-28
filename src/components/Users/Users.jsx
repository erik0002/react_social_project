import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../components/asserts/images/user-male.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
//import { usersAPI } from '../../api/api.js';
//import { toggleFollowingProgress } from "../../redux/users-reducer";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];

        for(let i=1; i <= pagesCount; i++){
            pages.push(i);
        }
  return <div>
    <div>
      {pages.map( p => {
        return (
          <span
            className={props.currentPage === p && styles.selectedPage}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
    {props.users.map( u => (
      <div key={u.id}>
        <span>
          <div>
            <NavLink to={/profile/ + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                 className={styles.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {u.followed 
              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                debugger;
                props.toggleFollowingProgress(true);
                axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                  {withCredentials: true, 
                   headers: {
                     "API-KEY": "ef96a5be-3275-406d-9774-c9880fdf4703"
                   }
                  }
                ).then((response) => {
                  if (response.data.resultCode === 0){
                    props.unfollow(u.id);
                  }
                  props.toggleFollowingProgress(false);
                });
              }}>Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                debugger;
                //props.toggleFollowingProgress(true);
                axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                  {}, 
                  {withCredentials: true,
                   headers: {
                      "API-KEY": "ef96a5be-3275-406d-9774-c9880fdf4703"
                    }
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0){
                    props.follow(u.id);
                  }
                  props.toggleFollowingProgress(false);
                });
              }}>Follow</button>
            }
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>
    ))}
    <button onClick={props.getUsers}>Get Users</button>
  </div>;
};
export default Users;
