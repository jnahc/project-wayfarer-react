import React from 'react';

import './PostDetail.css'

const PostDetail = (props) => {
    return (
        <div className="post-detail"> 
        <h2 className="post-title">{props.post.title}</h2>
        <h3>Author: {props.firstName} {props.lastName}</h3>
        <p>Date Created: {props.post.dateCreated}</p>
        <p>Location: {props.city.name} - {props.city.country}</p>
        <p>{props.post.body}</p>
        </div>
    )

};

export default PostDetail;