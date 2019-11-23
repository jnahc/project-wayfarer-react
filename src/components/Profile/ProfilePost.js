import React from 'react';
import {Link} from 'react-router-dom';

const ProfilePost = (props) => {
    return (
        <> 
            <ul><strong><Link to={`/postdetail/${props.postId}`}>{props.title}</Link></strong></ul>
            <ul>{props.body}</ul>
            <br></br>
        </>
    )

};

export default ProfilePost;