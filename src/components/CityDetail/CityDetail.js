import React from 'react';
import './CityDetail.css';

const CityDetail = (props) => {

  if (props.cityInfo.cityName) {
    return (
      <>
      <div className="cityHeader">
        <h1 className="city-name city-name-is-the-name" id="the-word-city-name">{props.cityInfo.cityName} </h1>
        <h4 className="country-name" id="the-word-city-name12">{props.cityInfo.countryName}</h4>
        <div><img src={`${props.cityInfo.picture}`} alt="" /></div>
      </div>
      </>
    )
  } else {
    return (
      <div>
        City Not Found.
      </div>
    );
  };
};

export default CityDetail;