import React from 'react';
import './Profile.css'
const Profile = (props) => {
    console.log(props)
    if (!props.editProfile) {
        return (
            <div style={{paddingTop:50}}>
                <h1>{props.firstName}  {props.lastName}'s Profile</h1>
                <img src={props.profilePhoto} alt=""/>
                <p><strong>Email:</strong>{props.profile.email}</p>
                <p><strong>Current City:</strong>{props.currentCity && props.currentCity}</p>
                <p><strong>Date Join:</strong> {props.profile.dateJoined && props.profile.dateJoined}</p>
                <button className="btn-warning1" onClick={() => props.onEdit()}>Edit</button>
            </div>
        )
    } else {
        return ( 
            <div style={{paddingTop:50}}>
                <h1 className="mb-3">Edit Profile</h1>
                <form onSubmit={props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="firstName" name="firstName" value={props.firstName}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={props.lastName}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentCity">Current City</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="currentCity" name="currentCity" value={props.currentCity} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePhoto">Profile Photo URL</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="profilePhoto" name="profilePhoto" value={props.profilePhoto} />
                    </div>
                    <button className="btn btn-primary" type="submit">Save</button>
                </form>     
            </div>      
        )
    }
};
export default Profile;