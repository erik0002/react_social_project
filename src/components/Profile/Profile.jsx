import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
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
