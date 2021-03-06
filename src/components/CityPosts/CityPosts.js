import React from 'react';
import CityPost from '../CityPost/CityPost';
import './CityPosts.css';

const CityPosts = (props) => {
  let sortedCityPostList = props.posts.slice().sort((a,b) => a.dateCreated - b.dateCreated).reverse();
  //CREDITS TO https://stackoverflow.com/questions/10123953/how-to-sort-an-array-by-a-date-property
  let cityList = sortedCityPostList.map((post) => {
    return (
      <CityPost 
        key={post._id}
        postId={post._id}
        title={post.title}
        body={post.body.slice(0,50)}
        dateCreated={post.dateCreated.toLocaleString('en-US')}
      />
    );
  })

  return (
    <>
      <h3>Posts</h3>
      {cityList}
    </>
  )
};

export default CityPosts;