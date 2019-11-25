import React, {Component} from 'react'
import CityDetail from '../../CityDetail/CityDetail';
import CityPosts from '../../CityPosts/CityPosts';
import CityModalContainer from '../CityModalContainer/CityModalContainer'
import axios from 'axios';

class CityDetailContainer extends Component {
  state = {
    postIds: [],
    cityName: '',
    countryName: '',
    picture: '',
    cityId: '',
    posts: []
  }

  componentDidMount () {

    axios.get(`${process.env.REACT_APP_API_URL}/cities/${window.location.pathname.split('/')[2]}`)
      .then((res) => {
        // console.log('City Detail Response - City ID',res);
        this.setState({
          cityName: res.data.data.name,
          countryName: res.data.data.country,
          picture: res.data.data.picture,
          cityId: window.location.pathname.split('/')[2],
          postIds: res.data.data.posts
        })
        this.grabPosts();
      })
      .catch((err) => console.log(err));
  }

  grabPosts () {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/city/${this.state.cityId}`)
      .then((res) => {
        // console.log('City Posts Container API Fired', res);
        this.setState({
          posts: res.data.posts
        });
      })
      .catch((err) => console.log(err));
  }



  render () {
    return (
      <>
        <CityModalContainer cityId={this.state.cityId} cityName={this.state.cityName}/>
        <CityDetail cityInfo={this.state} />
        <CityPosts posts={this.state.posts} />
      </>
    )
  }
}
export default CityDetailContainer;
