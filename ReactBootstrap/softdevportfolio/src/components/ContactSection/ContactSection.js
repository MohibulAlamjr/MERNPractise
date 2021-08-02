import React, { Component ,Fragment} from 'react'
import{Container,Row,Form,Button,Col}from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMobile } from '@fortawesome/free-solid-svg-icons';

export default class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <h1 className = "serviceTitle footerTitle">Quick Contact</h1>


                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="cardDescription">Name</Form.Label>
                                <Form.Control type="text" placeholder="" />

                                <Form.Label className="cardDescription">Email address</Form.Label>
                                <Form.Control type="email" placeholder="" />
                                
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="cardDescription">Message</Form.Label>
                                <Form.Control type="text" placeholder="" as="textarea" rows={3} />

                             
                                
                            </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                        </Form>


                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <h1 className = "serviceTitle footerTitle">Quick Contact</h1>

                        <p className="cardDescription">Shailkupa,Jhenidah</p>
                            <p className="cardDescription"><FontAwesomeIcon  icon={faEnvelope} />softdev.bd.123@gmail.com</p>
                            <p className="cardDescription"><FontAwesomeIcon  icon={faMobile} />+8801774276336</p>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
