import React, {Component} from 'react';
import CityModal from '../../CityModal/CityModal';
import axios from 'axios';


class CityModalContainer extends Component {
  //updated state keys
  state = {
    title: '',
    body: '',
    cityId: '',
    author: '',
  }

  handleChange = (event) => {
    // console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // updated axios call
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${this.userId}/${this.cityId}`, this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
     <CityModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} post={this.state} />
    )
  };
}


export default CityModalContainer;