import React, {Component} from 'react';
import PostDetail from '../../PostDetail/PostDetail';
import axios from 'axios';


class PostDetailContainer extends Component {

  state = {
    post: []
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

  }

  render () {
  
    return (
      <PostDetail post={this.state.post}/>
    )
  }
}

export default PostDetailContainer;
