import React from 'react'

const PostItem = ({post}) => {
  return (
    <div>
      <div className='post_content'>
        <strong>{post.id}.{post.title}</strong>
        <div>{}</div>
      </div>
    </div>
  )
}

export default PostItem
