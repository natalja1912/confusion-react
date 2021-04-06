import React, { useState } from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Label, Container } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const SubmitComment = ({ dishId, addComment }) => {
    const [modal, setModal] = useState(false);
    console.log(addComment);

    const toggle = () => setModal(!modal);

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    function handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        addComment(dishId, values.rating, values.userName, values.userComment);
    };

    return (
        <div className="container mb-2">
            <Row>
                <Button outline color="secondary" onClick={toggle}><i className="fa fa-pencil" style={{ marginRight: '0.5rem' }}></i>Submit Comment</Button>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            <Container>
                                <Row className="form-group">
                                    <Label htmlFor="userName" >Your name</Label>
                                    <Control.text className="form-control" model=".userName" name="userName" id="userName" placeholder="Your name" validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    /></Row>
                                <Row className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" name="rating" id="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>
                                <Row className="mt-3 form-group" >
                                    <Label htmlFor="userComment">Your Comment</Label>
                                    <Control.textarea model=".userComment" id="userComment" name="userComment"
                                        rows="5"
                                        className="form-control" />
                                </Row>
                            </Container>
                            <Row>
                                <Col sm={2}>
                                    <Button className="mb-3" type="submit" color="primary" onClick={toggle}>Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </Row>
        </div>
    );
}

export default SubmitComment;