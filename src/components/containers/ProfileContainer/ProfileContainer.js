import React, { Component } from 'react';
import Profile from '../../Profile/Profile';
import axios from 'axios';

class ProfileContainer extends Component {
    constructor() {
        super();
        this.state = {
            profile: {},
            editProfile: false,
            firstName: '',
            lastName: '',
            currentCity: '',
            profilePhoto: '',
        }
        this.onEdit = this.onEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{
            withCredentials: true,
        })
         .then((res) => {
             console.log(res);
             this.setState({
                 profile: res.data.data,
                 firstName: res.data.data.firstName,
                 lastName: res.data.data.lastName,
                 currentCity: res.data.data.currentCity,
                 profilePhoto: res.data.data.profilePhoto,
             });
         })
         .catch((err) => console.log(err));
    }

    onEdit() {
        console.log('getting to edit form')

        this.setState({
            editProfile: true,
        })
    }

    handleChange (event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userId = localStorage.getItem('uid');
        
        console.log(this.state);
        var newObj = Object.assign({}, this.state);
        delete newObj.profile;
        delete newObj.editProfile;
        console.log(newObj)
        axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}`, newObj, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
            this.setState({
                editProfile: false,
            })
        window.location.reload();

    }
    

    // updateProfile = (updatedProfile) => {}

    render () {
        console.log(this.state);

        return <Profile 
                profile={this.state.profile}
                editProfile={this.state.editProfile}
                onEdit={this.onEdit}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                currentCity={this.state.currentCity}
                profilePhoto={this.state.profilePhoto}
                />
    }
}

export default ProfileContainer;