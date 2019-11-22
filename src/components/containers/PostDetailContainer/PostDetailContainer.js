import React, {Component} from 'react';

import axios from 'axios';

class PostDetailContainer extends Component {
  // state={ post }

  componentDidMount () {
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${props._id}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        // this.setState({
        //   post: res.data.post
        // })
      })
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <h2>here is the post container</h2>
    )
  }
}

