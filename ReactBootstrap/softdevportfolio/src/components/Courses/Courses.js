import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import image from '../../asset/images/courses.jpg';

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                <h4 className="serviceTitle ourCourseTitle">OUR COURSES</h4>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                 <img className="CourseImage" src={image}/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                 <h4 className="CourseTitle">Web Development</h4>
                                 <p className="CoursePara">I build native and cross platform mobile app for your business app for your business</p>
                                 <a className="CourseLink" href="#">Details</a>
                                
                                </Col>
                            </Row>                                      
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <img className="CourseImage" src={image}/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                <h4 className="CourseTitle">Web Development</h4>
                                 <p className="CoursePara">I build native and cross platform mobile app for your business app for your business</p>
                                 <a className="CourseLink" href="#">Details</a>
                                
                                </Col>
                            </Row>                      
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <img className="CourseImage" src={image}/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                <h4 className="CourseTitle">Web Development</h4>
                                 <p className="CoursePara">I build native and cross platform mobile app for your business app for your business</p>
                                 <a className="CourseLink" href="#">Details</a>
                                
                                </Col>
                            </Row> 
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                <img className="CourseImage" src={image}/>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                <h4 className="CourseTitle">Web Development</h4>
                                 <p className="CoursePara">I build native and cross platform mobile app for your business app for your business</p>
                                 <a className="CourseLink" href="#">Details</a>
                                
                                </Col>
                            </Row>                    
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default Courses;