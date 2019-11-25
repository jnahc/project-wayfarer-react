import React from 'react';
import { withRouter } from 'react-router-dom';
import PostDeleteModal from '../../PostDeleteModal/PostDeleteModal'
import axios from 'axios';

class PostDeleteContainer extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${window.location.pathname.split('/')[2]}`)
      .then(res => {
        console.log(res);
        // this.props.history.goBack();
        this.props.history.push('/profile');
        // window.location.reload();

      })
  }

  render () {
    console.log('post detail id', window.location.pathname.split('/')[2])

    return (
      <div>
        This is the post delete container.
        <PostDeleteModal handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default withRouter(PostDeleteContainer);