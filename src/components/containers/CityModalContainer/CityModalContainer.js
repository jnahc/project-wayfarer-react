import React, {Component} from 'react';
import CityModal from '../../CityModal/CityModal';
import axios from 'axios';


class CityModalContainer extends Component {
  //updated state keys
  state = {
    title: '',
    body: '',
    currentUser: '',
    author: '',
    city: '',
  }

  componentDidMount () {
    this.setState({
      currentUser: localStorage.getItem('uid'),
      author: localStorage.getItem('uid'),
    })
  }

  handleChange = (event) => {
    // console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
      city: this.props.cityObjId,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // updated axios call
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${this.state.currentUser}/${this.props.cityId}`, this.state)
      .then((res) => {
        console.log(res);
        window.location.reload();
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