import React from 'react';
import './CitySlideCity.css';

const CitySlideCity = (props) => {
    return (
        <> 
        <a href={`/cities/${props.urlName}`} class={window.location.pathname.split('/')[2]==`${props.urlName}`?'active':'none'}>
            <img src={`${props.picture}`} alt="city" />
             {' '}
            <span>{props.city}</span>


        </a>
        </>
    )

};


export default CitySlideCity;