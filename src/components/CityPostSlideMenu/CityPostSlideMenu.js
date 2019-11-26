import React from 'react';
import CityPost from '../CityPost/CityPost';
import './CityPostSlideMenu.css';

const CityPostSlideMenu = (props) => {
  let sortedCityPostList = props.posts.slice().sort((a,b) => a.dateCreated - b.dateCreated).reverse();
  const postlist = sortedCityPostList.map((post) => {
    return (
        <CityPost
            key={post._id}
            postId={post._id}
            title={post.title}
            body={post.body.length > 200? post.body.slice(0,200) + '.........': post.body}
            photoUrl={post.photoUrl}
            dateCreated={post.dateCreated.toLocaleString('en-US')}
        />
    );
});
    return (
      <div className="postSlideContainer"> 
        <h3 id="the-word-posts">Posts</h3>
        <div className="vertical-menu" id="postSlide">     
          {postlist}
        </div>
      </div>
    )
};

export default CityPostSlideMenu;