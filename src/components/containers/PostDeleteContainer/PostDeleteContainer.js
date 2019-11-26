import React from 'react';
import { withRouter } from 'react-router-dom';
import PostDeleteModal from '../../PostDeleteModal/PostDeleteModal'
import axios from 'axios';


class PostDeleteContainer extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${window.location.pathname.split('/')[2]}`)
      .then(res => {
        this.props.history.push('/profile');
      })
  }

  render () {
    return (
      <div>
        <PostDeleteModal handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default withRouter(PostDeleteContainer);