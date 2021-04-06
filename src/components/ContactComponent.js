import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Row, Col, Button, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function Contact(props) {
    function handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    };

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <h2 className="col-12">Send Us Your Feedback</h2>
                <LocalForm className="col-12 mt-4" onSubmit={(values) => handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" sm={2}>First name</Label>
                        <Col sm={5}>
                            <Control.text className="form-control" model=".firstname" name="firstname" id="firstname" placeholder="First name" validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }} />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required. ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" sm={2}>Last name</Label>
                        <Col sm={5}>
                            <Control.text className="form-control" model=".lastname" name="lastname" id="lastname" placeholder="Last name" validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }} />
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required. ',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" sm={2}>Contact tel.</Label>
                        <Col sm={5}>
                            <Control.text className="form-control" model=".telnum" name="telnum" id="telnum" validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                            }} />
                            <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less',
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" sm={2}>Email</Label>
                        <Col sm={5}>
                            <Control.text className="form-control" model='.email' name="email" id="email" validators={{
                                required, validEmail
                            }} />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email Address'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col sm={{ size: 3, offset: 2 }}>
                            <Label check>
                                <Control.checkbox model=".agree" name="agree"
                                    className="form-check-input" />
                                <strong>May we contact you?</strong>
                            </Label>
                        </Col>
                        <Col sm={2}>
                            <Control.select model=".contactType" name="contactType"
                                className="form-control">
                                <option>Tel.</option>
                                <option>Email</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="mt-3 form-group" >
                        <Label htmlFor="message" sm={2}>Your Feedback</Label>
                        <Col sm={5}>
                            <Control.textarea model=".message" id="message" name="message"
                                rows="8"
                                className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button className="mt-3" color="primary">Send Feedback</Button>
                        </Col>
                    </Row>
                </LocalForm>

            </div>
        </div>
    );
}

export default Contact;