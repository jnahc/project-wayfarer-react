import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CityModal from '../../CityModal/CityModal';
import axios from 'axios';

class CityModalContainer extends Component {
  state = {
    title: '',
    body: '',
    currentUser: '',
    author: '',
    city: '',
    photoUrl: '',
  }

  componentDidMount () {
    this.setState({
      currentUser: localStorage.getItem('uid'),
      author: localStorage.getItem('uid'),
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      city: this.props.cityObjId,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post(`${process.env.REACT_APP_API_URL}/posts/${this.state.currentUser}/${this.props.cityId}`, this.state)
      .then((res) => {
        this.props.history.push('/profile')
      })
      .catch((err) => console.log(err));      
  }

  render() {
    return (
     <CityModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} post={this.state} />
    )
  };
}

export default withRouter(CityModalContainer);