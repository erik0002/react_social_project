import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = () => { 
    
return (
        <div>
            <div> My posts </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div> New Post </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCounts='3' />
                <Post message="it's my first post" likeCounts='5' />
            </div>
        </div>
)
}

export default MyPosts;