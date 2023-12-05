import React from "react";
import Postitem from "./postitem";
const PostList = ({posts, title, remove}) =>{
    return(
        <div>
            <h1 style={{textAlign : 'center'}}>
                {title}
                </h1>
            {posts.map((post,index) => 
                <Postitem remove={remove} number={index + 1} post={post} key={post.id}></Postitem>
            )}
        </div>
    )
}

export default PostList;