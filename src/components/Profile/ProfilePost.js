import React from 'react';

const ProfilePost = (props) => {
    return (
        <> 
            <ul><strong><a href="">{props.title}</a></strong></ul>
            <ul>{props.body}</ul>
            <br></br>
        </>
    )

};

export default ProfilePost;