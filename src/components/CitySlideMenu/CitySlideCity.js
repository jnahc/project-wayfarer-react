import React from 'react';
import './CitySlideCity.css';

const CitySlideCity = (props) => {
    return (
        <> 
        <a href={`/cities/${props.urlName}`} className={window.location.pathname.split('/')[2]===`${props.urlName}`?'active':'none'}>
            <img src={`${props.picture}`} alt="city" />
             {' '}
            <span className="city-name">{props.city}</span>


        </a>
        </>
    )

};


export default CitySlideCity;