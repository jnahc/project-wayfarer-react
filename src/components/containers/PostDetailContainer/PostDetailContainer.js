import React, {Component} from 'react';
import PostDetail from '../../PostDetail/PostDetail';
import axios from 'axios';


class PostDetailContainer extends Component {

  constructor() {
    super();
    this.state = {
      post: [],
      // firstName: '',
      // lastName: '',
      city: {},
      postAuthor: {},
      editPost: false,
      title: '',
      photoUrl: '',
      body: '',
    }
    // this.onEdit = this.onEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit() {
    console.log('getting to edit form')

    this.setState({
        editPost: true,
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
    // const userId = localStorage.getItem('uid');
    
    console.log(this.state);
    let newObj = Object.assign({}, this.state);
    delete newObj.post;
    delete newObj.city;
    delete newObj.postAuthor;
    delete newObj.editPost;
    console.log(newObj)
    axios.put(`${process.env.REACT_APP_API_URL}/posts/${this.state.post._id}`, newObj, {
        withCredentials: true,
    })
        .then((res) => {
            console.log(res);
            this.props.setCurrentUser(res.data.data);
            this.props.history.push('/postdetail/5ddc308ee16376c06e5684ff');

        })
        .catch((err) => console.log(err));
        this.setState({
            editPost: false,
        })

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
          post: res.data.data,
          title: res.data.data.title,
          photoUrl: res.data.data.photoUrl,
          body: res.data.data.body,
        })
        this.callCity();
        this.callAuthorName();

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
      <>
      <PostDetail 
          post={this.state.post}
          city={this.state.city}
          postAuthor={this.state.postAuthor}
          title={this.state.title}
          photoUrl={this.state.photoUrl}
          body={this.state.body}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          onEdit={this.onEdit}
          editPost={this.state.editPost}
       />
      <div>123</div>
      </>
    )
  }
}

export default PostDetailContainer;
