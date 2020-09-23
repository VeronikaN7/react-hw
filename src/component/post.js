import React from 'react';
import comment from './img/comment.png';
import share from './img/share.png';
import like from './img/like.png';
import download from './img/download.png';

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
          <img src={comment} className="icons" alt="comment-icon"/>
          <p>482</p>
  </div>
        <div className="item-function"><img src={share} className="icons" alt="share-icon"/>
        <p>146</p> </div>
        <div className="item-function"><img src={like} className="icons" alt="like-icon"/>
        <p>88</p></div>
        <div className="item-function"><img src={download} className="icons" alt="download-icon"/>
        </div>
      </div> 
    </div>

</div>
  )
}

export default Post;

