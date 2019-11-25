import React from 'react';
import './CityDetail.css';


const CityDetail = (props) => {
  // let cityList = props.posts.map((post) => {
  //   return (
  //     <CityPost 
  //       key={post._id}
  //       postId={post._id}
  //       cityName={post.name}
  //       countryName={post.country}
        
  //     />

  //   )

  // })
  if (props.cityInfo.cityName) {
    return (
      <>



    
      <div className="cityHeader">
        <h2>City - {props.cityInfo.cityName} </h2>
        <h3>Country - {props.cityInfo.countryName}</h3>
        <div><img src={`${props.cityInfo.picture}`} /></div>
  
      </div>
      </>
    )
  } else {
    return (
      <div>
        City No Found.
      </div>
    )
  }


}

export default CityDetail;