import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import image from '../../asset/images/foodPhone.jpg';



const Portfolio = () => {
    return (
        <Fragment>
                <Container className="text-center">
                    
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                        <Card className="recentProjectsCard">
                        <Card.Img className="images" variant="top" src={image} />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">Card Title</Card.Title>
                            <Card.Text className="projectCardDescription">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button className="RecentButton" variant="primary">Details</Button>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                        <Card className="recentProjectsCard">
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDescription">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="RecentButton" variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                        <Card className="recentProjectsCard">
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">Card Title</Card.Title>
                            <Card.Text className="projectCardDescription">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button className="RecentButton" variant="primary">Details</Button>
                        </Card.Body>
                        </Card>
                        
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                        <Card className="recentProjectsCard">
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDescription">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="RecentButton" variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                        <Card className="recentProjectsCard">
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDescription">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="RecentButton" variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                        <Card className="recentProjectsCard">
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                <Card.Text className="projectCardDescription">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="RecentButton" variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
    );
};

export default Portfolio;