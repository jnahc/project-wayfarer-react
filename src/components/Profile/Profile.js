import React from 'react';

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.profile.firstName && props.profile.firstName}'s Profile</h1>
            <p><strong>Email:</strong>{props.profile.email}</p>
        </div>
    )
};

export default Profile;