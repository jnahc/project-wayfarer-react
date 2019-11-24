import React from 'react';
import {Link} from 'react-router-dom';

const ProfilePost = (props) => {
    return (
        <> 
            <ul><strong><Link to={`/postdetail/${props.postId}`}>{props.title}</Link></strong>
            <li>
                {props.body}
            </li>
            <li>
                Date Created: {props.dateCreated.toLocaleString('en-US')}
            </li>
            </ul>
            <br></br>
        </>
    )

};

export default ProfilePost;