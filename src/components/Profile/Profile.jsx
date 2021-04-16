import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
                {/* //PostData={props.profilePage.PostData}
                //newPostText ={props.profilePage.newPostTe xt}
               //addPost={props.addPost} 
               
               //dispatch={props.dispatch}
              //  newPostText={props.state.newPostText} */}           
    </div>
  );
};

export default Profile;
