import React from 'react'
//import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import s from './MyPosts.module.css'
import Post from './Posts/Post'




const MyPosts = (props) => { 

// let PostData = [
//     {id: 1, message: "Hi, how are you?", likeCounts: 12},
//     {id: 2, message: "it's my first post", likeCounts: 11},
//     {id: 3, message: "it's my second post", likeCounts: 21}

// ]  
 
let PostElement = props.posts.map( p => <Post message={p.message} key={p.id} likeCounts={p.likeCounts}/> )
 
let newPostElement = React.createRef();



let onAddPost = () => {
    props.addPost();
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text); 
}


return (
        <div>
            <div className={s.postsBlock}> <h3> My posts  </h3></div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div> New Post </div>
            <div className={s.posts}>
                    {PostElement}
            </div>
        </div>
)
}

export default MyPosts;