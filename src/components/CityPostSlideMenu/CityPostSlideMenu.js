import React from 'react';
import {Link} from 'react-router-dom';
// import CitySlideCity from './CitySlideCity';
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
            body={post.body.slice(0,50)}
            photoUrl={post.photoUrl}
            dateCreated={post.dateCreated.toLocaleString('en-US')}
        />
    );
});
    return (
      <div className="postSlideContainer"> 
        <h3>Posts</h3>
        <div className="vertical-menu" id="postSlide">     
          {postlist}
        </div>
      </div>
    )

};

export default CityPostSlideMenu;