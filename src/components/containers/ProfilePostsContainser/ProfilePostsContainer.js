import React from 'react';
import ProfilePosts from '../../Profile/ProfilePosts';
import axios from 'axios';

class ProfilePostsContainer extends React.Component {

    state = {
        posts: [],
    }


    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL}/posts/${userId}/posts`,{
            withCredentials: true,
        })
         .then((res) => {
             console.log(res);
             this.setState({
                 posts: res.data.posts
             });
         })
         .catch((err) => console.log(err));
    }

    render () {
        return (
            <div style={{float:"left"}}>
                <ProfilePosts posts={this.state.posts}/>
            </div>        
        )
    }

}

export default ProfilePostsContainer;