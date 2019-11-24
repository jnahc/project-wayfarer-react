import React from 'react';


const PostDetail = (props) => {
    return (
        <> 
        <h2>{props.post.title}</h2>
        <h3>Author: {props.firstName} {props.lastName}</h3>
        <p>Date Created: {props.post.dateCreated}</p>
        <p>Location: {props.city.name} - {props.city.country}</p>
        <p>{props.post.body}</p>
        </>
    )

};

export default PostDetail;