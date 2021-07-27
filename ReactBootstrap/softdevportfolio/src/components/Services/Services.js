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
                        <Col className="cardColumn" lg={4} md={6} sm={12}>
                        <Card id="card1" className="card" style={{ width: '18rem' }}>
                        <Card.Img className="serviceImage" variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col className="cardColumn" lg={4} md={6} sm={12}>
                        <Card id="card2" className="card" style={{ width: '18rem' }}>
                        <Card.Img className="serviceImage" variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>Mobile Development</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col className="cardColumn" lg={4} md={6} sm={12}>
                        <Card id="card3" className="card" style={{ width: '18rem' }}>
                        <Card.Img className="serviceImage" variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>Graphics Design</Card.Title>
                            <Card.Text>
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