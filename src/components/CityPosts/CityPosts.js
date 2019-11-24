import React from 'react';
import CityPost from '../CityPost/CityPost';


const CityPosts = (props) => {
  console.log(props.posts)
  let cityList = props.posts.map((post) => {
    return (
      <CityPost 
        key={post._id}
        postId={post._id}
        title={post.title}
        body={post.body.slice(0,50)}
      />
    );
  })

  return (
    <ul style={{paddingTop:50}}>
      <h1>City Posts</h1>
      {cityList}
    </ul>
    // <div>
    //   this is the city posts
    // </div>
  )
};

export default CityPosts;