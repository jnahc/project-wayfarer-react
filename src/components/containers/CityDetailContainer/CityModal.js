import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function CityModal (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="warning" onClick={handleShow}>Create Post</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.header closeButton>
                <Modal.title>Create New Post</Modal.title>
            </Modal.header>
            <Modal.body>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <form onSubmit={props.handleSubmit}>
                                <div className="form-group">
                                    <h2>San Francisco</h2>
                                    {/* <label htmlFor="name">Email</label>
                                    <input onChange={props.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={props.user.email} /> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Title</label>
                                    <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="submit" name="title" value="Submit" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Post:</label>
                                    <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="submit" name="content" value="Submit" />
                                </div>
                                <button onClick={handleClose} className="btn btn-primary float-right" type="submit">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.body>
        </Modal>
        </>
    )
}


export default CityModal;