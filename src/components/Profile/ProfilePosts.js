import React from 'react';
import ProfilePost from './ProfilePost'

const ProfilePosts = (props) => {
    // console.log(props.posts)
    let sortedProfilePostList = props.posts.sort((a,b) => a.dateCreated - b.dateCreated).reverse()
    let profileList = sortedProfilePostList.map((post) => {
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
        <ul style={{paddingTop:50}}>
            <h1>My Posts</h1>
            {profileList}
        </ul>
    )

};

export default ProfilePosts;

