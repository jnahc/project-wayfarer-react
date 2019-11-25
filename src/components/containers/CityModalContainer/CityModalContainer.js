import React, {Component} from 'react';
import CityModal from "./CityPosts/CityModal";
import axios from 'axios';


class CityModalContainer extends Component {
  state = {
    title: '',
    content: '',
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
    axios.post(`${process.env.REACT_APP_API_URL}/CityModalContainer/CityModalContainer`, this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
     <CityModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
    )
  };
}


export default CityModalContainer;