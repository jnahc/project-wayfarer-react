import React from 'react';
import CityPost from '../CityPost/CityPost';
import CityModal from './CityModal';


// const CityPosts = (props) => {
class CityPosts extends React.Component {
  state = {
    postModalOpen: false,
  }

  handlePostModalOpen = () => {
    this.setState((prevState) => {
      return {
        postModalOpen: !prevState.postModalOpen
      }
    })
  }

  // console.log(props.posts)
  // let cityList = props.posts.map((post) => {
  //   return (
  //     <CityPost 
  //       key={post._id}
  //       postId={post._id}
  //       title={post.title}
  //       body={post.body.slice(0,50)}
  //     />
  //   );
  // })
  render () {
    return (
      <ul style={{paddingTop:50}}>
        <h1>City Posts</h1>
        <a onClick={this.handlePostModalOpen}>Add Post</a>
        {/* {cityList} */}
        <CityModal handlePostModalOpen={this.handlePostModalOpen} postModalOpen={this.state.postModalOpen} />
      </ul>
      // <div>
      //   this is the city posts
      // </div>
    )  
  }
};

export default CityPosts;