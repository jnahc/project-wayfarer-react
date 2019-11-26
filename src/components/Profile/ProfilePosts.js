import React from 'react';
import ProfilePost from './ProfilePost'

import './ProfilePosts.css'

const ProfilePosts = (props) => {
    let sortedProfilePostList = props.posts.slice().sort((a,b) => a.dateCreated - b.dateCreated).reverse();
    const profileList = sortedProfilePostList.map((post) => {
        return (
            <ProfilePost 
                key={post._id}
                postId={post._id}
                title={post.title}
                body={post.body.slice(0,50)}
                dateCreated={post.dateCreated}
            />
        );
    });

    return (
            <div>
                <h1 className="userPosts">My Posts</h1>
                <div className="profile-list vertical-menu" id="slide1">
                {profileList}
                </div>
            </div>
    );
};

export default ProfilePosts;

