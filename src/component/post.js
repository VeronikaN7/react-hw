import React from 'react';
import Img from 'img';

const Post = (props) => {
  return (
<div className="container">
    <div className="wrapper">
      <div className="user">
          <img className="avatar" src={props.author.photo} alt="avatar"/>
        <div className="user-info">
          <span className="avatar-name">{props.author.name}</span>
          
          <span>{props.author.nickname}</span>
          <span>{props.date}</span>
          <p>{props.content}</p>
        </div>
        <div className="arrow"></div>
      </div>
      <div>
        <img className="post-photo" src={props.image} alt="main-post"/>
      </div>
      <div className="add-functions">
        <div className="item-function"> 
          <img src={require("/img/share.png")} className="icons" alt="comment-icon"/>
          <p>482</p>
        </div>
        <div className="item-function"><img src={require("/img/share.png")} className="icons" alt="share-icon"/>
        <p>146</p> </div>
        <div className="item-function"><img src={require("/img/like.png")} className="icons" alt="like-icon"/>
        <p>88</p></div>
        <div className="item-function"><img src={require("/img/download.png")} className="icons" alt="download-icon"/>
        </div>
      </div>
    </div>

</div>
  )
}

export default Post;

