import React from 'react';
import {Link} from 'react-router-dom';



const PostDetail = (props) => {
    return (
        <> 
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
        </>
    )

};

export default PostDetail;