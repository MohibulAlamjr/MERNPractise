import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import image1 from '../../asset/images/web.svg';
import image2 from '../../asset/images/mobile.svg';
import image3 from '../../asset/images/graphics.svg';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <h1 className = "serviceTitle">
                            MY SERVICES
                        </h1>

                        <Col className="cardColumn" lg={4} md={6} sm={12}>
                        <Card  className="card" style={{ width: '18rem' }}>
                        <Card.Img className="serviceImage" variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title className="cardTitle">Web Development</Card.Title>
                            <Card.Text className="cardDescription">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col className="cardColumn" lg={4} md={6} sm={12}>
                        <Card  className="card" style={{ width: '18rem' }}>
                        <Card.Img className="serviceImage" variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title className="cardTitle">Mobile Development</Card.Title>
                            <Card.Text className="cardDescription">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col className="cardColumn" lg={4} md={6} sm={12}>
                        <Card  className="card" style={{ width: '18rem' }}>
                        <Card.Img className="serviceImage" variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title className="cardTitle">Graphics Design</Card.Title>
                            <Card.Text className="cardDescription">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;