import React from 'react';


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
  return (
    <div>
      <h2>City - {props.cityInfo.cityName} </h2>
      <h3>Country - {props.cityInfo.countryName}</h3>
      <div><img src={`${props.cityInfo.picture}`} alt="" /></div>

    </div>
  )

}

export default CityDetail;