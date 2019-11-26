import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './PostDeleteModal.css'

function PostDeleteModal (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="delete-this" variant="primary" onClick={handleShow}>
        Delete this post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <form onSubmit={props.handleSubmit}>
                  <span id="are-u-sure">Are you sure you want to delete this post?</span>
                  <button id="confirm-delete" onClick={handleClose} className="btn btn-primary" type="submit">Delete</button>
                  <div id="cancel-button" onClick={handleClose} className="btn btn-primary">Cancel</div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostDeleteModal;