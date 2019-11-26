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

    // event.preventDefault();
    // console.log(this.state);
    // axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state.email)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err.toString())
    //     console.log(err.toString() === `Error: Request failed with status code 400`)
    //     if (err.toString() === `Error: Request failed with status code 400`) {
    //       this.setState({
    //         emailDup: true,
    //       })
    //     } else {
    //       this.setState({
    //         emailDup: false,
    //       })
    //     }
    //   });
  };

  handleSubmit = (event) => {
   
      event.preventDefault();
      console.log(this.state);
      let newObj = this.state
      delete newObj.emailDup

      axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
        // .catch((err) => {
        //   console.log(err)
        //   console.log(err.toString() === `Error: Request failed with status code 400`)
        //   if (err.toString() === `Error: Request failed with status code 400`) {
        //     this.setState({
        //       emailDup: true,
        //     })
        //   }
        // });
        


  }

  render() {
    return (
     <RegisterModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} emailDup={this.state.emailDup}/>
    )
  };
}


export default Register;