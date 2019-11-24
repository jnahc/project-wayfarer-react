import React from 'react';
import ProfilePost from './ProfilePost'

const ProfilePosts = (props) => {
    console.log(props.posts)
    let profileList = props.posts.map((post) => {
        return (
            
            <ProfilePost 
                key={post._id}
                postId={post._id}
                title={post.title}
                body={post.body.slice(0,50)}
            />
        );
    });

    return (
        <ul style={{paddingTop:50}}>
            <h1>My Posts</h1>
            {profileList}
        </ul>
    )

};

export default ProfilePosts;

