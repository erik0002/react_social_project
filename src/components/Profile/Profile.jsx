import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://www.digitalmusicnews.com/wp-content/uploads/2019/12/Eurovision_Song_Contest.jpg"></img>
      </div>
      <div>
        <img
          className={s.ImgLogo}
          src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"
        ></img>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
