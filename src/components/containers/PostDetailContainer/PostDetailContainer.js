import React, {Component} from 'react';
import PostDetail from '../../PostDetail/PostDetail';
import axios from 'axios';


class PostDetailContainer extends Component {

  state = {
    post: [],
    firstName: '',
    lastName: '',
    city: {}
    
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

  // callPostAuthor () {
     // API CALL FOR USERNAME
    // console.log('CallPostAuthorFired',this.state.post.author[0]);
  //    axios.get(`${process.env.REACT_APP_API_URL}/users/${window.location.pathname.split('/')[2]}`,{
  //     withCredentials: true,
  // })
  //   .then((res) => {
  //   console.log(res);
  //   this.setState({
  //     firstName: res.data.data.firstName,
  //     lastName: res.data.data.lastName,
  //   });
  //   })
  //   .catch((err) => console.log(err));
  // }

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
        // this.callPostAuthor();
      })
      .catch((err) => console.log(err));

    // API CALL FOR USERNAME
    // axios.get(`${process.env.REACT_APP_API_URL}/users/${window.location.pathname.split('/')[2]}`,{
    //     withCredentials: true,
    // })
    //   .then((res) => {
    //   // console.log(res);
    //   this.setState({
    //     firstName: res.data.data.firstName,
    //     lastName: res.data.data.lastName,
    //   });
    //   })
    //   .catch((err) => console.log(err));
  }


  render () {
  
    return (
      <PostDetail post={this.state.post} firstName={this.state.firstName} lastName={this.state.lastName} city={this.state.city} />
    )
  }
}

export default PostDetailContainer;
