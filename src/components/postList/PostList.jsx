import React from 'react'
import PostItem from '../postItem/PostItem';

const PostList = ({posts}) => {
    console.log(posts);
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map(post=>(
        <PostItem post/>
      ))}
    </div>
  )
}

export default PostList
