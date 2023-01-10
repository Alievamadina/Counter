import { useState } from "react";
import React from "react";
import PostList from "./components/postList/PostList";
const App = () => {
  const DUNNY_POSTS = [
    { id:1, title:'Java', body:'Peaksoft'},
    { id:2, title:'JavaScript', body:'Peaksoft'},
    { id:3, title:'React', body:'Peaksoft'}
  ]
  const[posts,setPosts]=useState(DUNNY_POSTS)
  return <div>
{/* <div className="posts">
{posts.map(post=>(
  <p>{post.title}</p>
))}
</div> */}
<PostList/>
  </div>;
};

export default App;
