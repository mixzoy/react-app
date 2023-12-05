import React, { useRef, useState } from "react";
import './styles/style.css'
import Postitem from "./components/postitem";
import PostList from "./components/postlist";
import MyButton from "./components/UI/button/mybutton";
import Myinput from "./components/UI/input/myinput";
import PostForm from "./components/postform";
function App() {
  const [posts,setPosts] = useState([
    {id : 1, title: 'JavaScript', body: 'Description'},
    {id : 2, title: 'JavaScript 2', body: 'Description'},
    {id : 3, title: 'JavaScript 3', body: 'Description'},
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter( p => p.id !== post.id))
  }


  return (
    <div className="App">

      <PostForm create={createPost}>

      </PostForm>
      {posts.length !== 0 
        ? <PostList remove={removePost} posts={posts} title={'Список постов 1'}></PostList>
        : <div>Посты не найдены</div>
      }
      
      
    </div>
  );
}

export default App;
