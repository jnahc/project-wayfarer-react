import React, {Component} from 'react';
import RegisterModal from "./RegisterModal";
import axios from 'axios';


class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    currentCity: '',
    password: '',
    password2: '',
    // emailDup: false,
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
      // let newObj = this.state
      // delete newObj.emailDup

      axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
  }

  render() {
    return (
     <RegisterModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} emailDup={this.state.emailDup}/>
    )
  };
}


export default Register;