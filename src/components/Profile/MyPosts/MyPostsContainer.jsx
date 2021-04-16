import React from 'react'
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'




// const MyPostsContainer = (props) => { 

// let state = props.store.getState().profilePage;
// console.log(state);

// let addPost = () => {
//     //let event = addPostActionCreator;
//     props.store.dispatch(addPostActionCreator());
// }

// let onPostChange = (text) => {
//     //props.updateNewPostText(text);
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
// }
 
// return (

//         <MyPosts addPost={addPost} updateNewPostText={onPostChange} 
//                  posts={state.PostData}
//                  newPostText={state.newPostText}/>)
//         }

const mapStateToProps = (state) => {
        return {
            posts: state.profilePage.PostData, 
            newPostText: state.profilePage.newPostText
        }
}
const mapDispatchToProps = (dispatch) => {
        return {
            updateNewPostText: (text) => {
                let action = updateNewPostTextActionCreator(text);
                dispatch(action);
            }, 
            addPost: () => {
                dispatch(addPostActionCreator());
            }
        }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;