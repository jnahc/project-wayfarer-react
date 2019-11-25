import React, {Component} from 'react';
import PostDetail from '../../PostDetail/PostDetail';
import axios from 'axios';


class PostDetailContainer extends Component {

  state = {
    post: [],
    firstName: '',
    lastName: '',
    city: {},
    postAuthor: {},
  }

  callCity () {
    // API CALL FOR CITYNAME
    console.log('callCity API Fired')
    axios.get(`${process.env.REACT_APP_API_URL}/cities/id/${this.state.post.city}`,
    // {
    //   withCredentials: true,
    // }
    )
    .then((res) => {
    console.log('callCity API Success',res);
    this.setState({
      city: res.data.data 
    });
    })
    .catch((err) => console.log(err));
  }
  callAuthorName () {
    // API CALL FOR AUTHOR NAME
    console.log('callAuthorName API Fired')
    console.log(this.state.post.author[0])
    axios.get(`${process.env.REACT_APP_API_URL}/posts/author/${this.state.post.author[0]}`,
    // {
    //   withCredentials: true,
    // }
    )
    .then((res) => {
    console.log('callAuthor API Success',res);
    this.setState({
      postAuthor: res.data.data 
    });
    })
    .catch((err) => console.log(err));
  }

  componentDidMount () {

    //API CALL FOR POST
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${window.location.pathname.split('/')[2]}`, {
      withCredentials: true,
    })
      .then((res) => {
        // console.log(res);
        this.setState({
          post: res.data.data
        })
        this.callCity();
        this.callAuthorName();
      })
      .catch((err) => console.log(err));

    // API CALL FOR USERNAME
    axios.get(`${process.env.REACT_APP_API_URL}/users/${window.location.pathname.split('/')[2]}`,{
        withCredentials: true,
    })
      .then((res) => {
      // console.log(res);
      this.setState({
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
      });
      })
      .catch((err) => console.log(err));
  }


  render () {
  
    return (
      <PostDetail post={this.state.post} city={this.state.city} postAuthor={this.state.postAuthor} />
    )
  }
}

export default PostDetailContainer;
