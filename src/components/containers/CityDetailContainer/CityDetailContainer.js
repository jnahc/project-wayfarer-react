import React, {Component} from 'react'
import CityDetail from '../../CityDetail/CityDetail';
import axios from 'axios';

class CityDetailContainer extends Component {
  state = {
    post: [],
    cityName: '',
    countryName: '',
    picture: ''
  }

  componentDidMount () {

    axios.get(`${process.env.REACT_APP_API_URL}/cities/${window.location.pathname.split('/')[2]}`)
      .then((res) => {
        console.log('City Detail Response',res.data);
        this.setState({
          cityName: res.data.data.name,
          countryName: res.data.data.country,
          picture: res.data.data.picture
        })
      })
      .catch((err) => console.log(err));

    // NEED TO GET CITY POST... MAKE backend for CITY DETAIL POSTS LIST
    // axios.get(`${process.env.REACT_APP_API_URL}/cities/${window.location.pathname.split('/')[2]}`)
    // .then((res) => {
    //   console.log(res);
    //   this.setState({
    //     cityName: res.data.name,
    //     countryName: res.data.country,
    //     picture: res.data.picture
    //   })
    // })
    // .catch((err) => console.log(err));
  }

  render () {
    return (
      <CityDetail cityInfo={this.state} />
    )

  }
}
export default CityDetailContainer;