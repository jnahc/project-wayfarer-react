import React, {Component} from 'react'
import CitySlideMenu from '../../CitySlideMenu/CitySlideMenu';
import CityDetail from '../../CityDetail/CityDetail';
import CityPosts from '../../CityPosts/CityPosts';
import axios from 'axios';

class CityDetailContainer extends Component {
  state = {
    postIds: [],
    cityName: '',
    countryName: '',
    picture: '',
    cityId: '',
    posts: [],
    citiesList: [],
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
        this.grabCitiesList();
      })
      .catch((err) => console.log(err));
  }

  grabPosts () {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/city/${this.state.cityId}`)
      .then((res) => {
        console.log('City Posts Container API Fired', res);
        this.setState({
          posts: res.data.posts
        });
      })
      .catch((err) => console.log(err));
  }

  grabCitiesList () {
    axios.get(`${process.env.REACT_APP_API_URL}/cities`)
      .then((res) => {
        console.log('Cities List API Fired', res.data.data);
        this.setState({
          citiesList: res.data.data
        });
      })
      .catch((err) => console.log(err));
  }

  

  

  



  render () {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col-sm">   
            <CitySlideMenu citiesList={this.state.citiesList} />
          </div>
          <div className="col-sm">   
            <CityDetail cityInfo={this.state} />
            <CityPosts posts={this.state.posts} />
          </div>
        </div>
      </div>
      </>
    )
  }
}
export default CityDetailContainer;
