import React from 'react';
import './CitySlideCity.css';

const CitySlideCity = (props) => {
    return (
        <> 
        <a href="#">
            <img src={`${props.picture}`} alt="city" />
             {' '}
            <span>{props.city}</span>


        </a>
        </>
    )

};


export default CitySlideCity;