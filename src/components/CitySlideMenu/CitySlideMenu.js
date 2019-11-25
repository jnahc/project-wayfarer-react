import React from 'react';
import {Link} from 'react-router-dom';
import CitySlideCity from './CitySlideCity';
import './CitySlideMenu.css';



const CitySlideMenu = (props) => {
  console.log(props, '123123')
  console.log(props.citiesList[0],'12312312412')
  const list = props.citiesList.map((city) => {
    return (
        <CitySlideCity 
            key={city._id}
            city={city.name}
            urlName={city.urlName}
            picture={city.picture}
        />
    );
});
    return (
      <div className="slideContainer"> 
        <h1>Cities</h1>
        <div className="vertical-menu" id="slide">     
          {list}
        </div>
      </div>
    )

};

export default CitySlideMenu;