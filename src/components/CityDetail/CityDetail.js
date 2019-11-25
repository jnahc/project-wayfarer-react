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
        <h1>{props.cityInfo.cityName} </h1>
        <h4>{props.cityInfo.countryName}</h4>
        <div><img src={`${props.cityInfo.picture}`} /></div>
      </div>
      </>
    )
  } else {
    return (
      <div>
        City Not Found.
      </div>
    )
  
  }
}

export default CityDetail;