import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function CityModal (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// class CityModal extends React.Component {
    // state = {
    //     title: "",
    //     content: "",
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // render () {

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
                                {/* <form onSubmit={this.props.handleSubmit}> */}
                                <form>
                                    <div className="form-group">
                                        <h2>San Francisco</h2>
                                        {/* <label htmlFor="name">Email</label>
                                        <input onChange={props.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={props.user.email} /> */}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Title</label>
                                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="title" name="title" value="submit" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Post:</label>
                                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="content" name="content" value="submit" />
                                    </div>
                                    <button className="btn btn-primary float-right" type="submit">Save Changes</button>
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