import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './CityModal.css'

function CityModal (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className="create-button" variant="warning" onClick={handleShow}>Create Post</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-4">                     
                        <form onSubmit={props.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="title" name="title" value={props.post.title} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="photoUrl">Photo URL</label>
                                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="photoUrl" name="photoUrl" value={props.post.photoUrl} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="photoUrl">Post:</label>
                                <textarea onChange={props.handleChange} className="form-control form-control-lg" type="text" id="body" name="body" value={props.post.body} />
                            </div>
                            <button id="save-button" onClick={handleClose} className="btn btn-primary float-right" type="submit">Save Changes</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CityModal;