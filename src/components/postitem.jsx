import React from "react";
import MyButton from "./UI/button/mybutton";

const Postitem = (props) => {
    return (
        <div className="post">
            <div className="post-info">
                <h2>{props.number}. {props.post.title}</h2>
                <span>{props.post.body}</span>
            </div>
            <MyButton onClick={() => props.remove(props.post)} className="delete-btn">  
            Удалить
            </MyButton>
      </div>
    )
};

export default Postitem;