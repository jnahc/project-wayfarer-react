import React, {Component} from 'react';
import PostDetail from '../../PostDetail/PostDetail';
import axios from 'axios';


class PostDetailContainer extends Component {

  state = {
    post: [],
    firstName: '',
    lastName: '',
  }

  componentDidMount () {

    axios.get(`${process.env.REACT_APP_API_URL}/posts/${window.location.pathname.split('/')[2]}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        this.setState({
          post: res.data.data
        })
      })
      .catch((err) => console.log(err));

      const userId = localStorage.getItem('uid');
      axios.get(`${process.env.REACT_APP_API_URL}/users/${window.location.pathname.split('/')[2]}`,{
          withCredentials: true,
      })
       .then((res) => {
           console.log(res);
           this.setState({
               firstName: res.data.data.firstName,
               lastName: res.data.data.lastName,
           });
       })
       .catch((err) => console.log(err));

  }

  render () {
  
    return (
      <PostDetail post={this.state.post} firstName={this.state.firstName} lastName={this.state.lastName} />
    )
  }
}

export default PostDetailContainer;
