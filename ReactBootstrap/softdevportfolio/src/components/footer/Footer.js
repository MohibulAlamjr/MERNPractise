import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faMobile } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid = {true} className = "text-center footerSection">
                    <Row>
                        <Col lg = {3} md = {6} sm = {12} className = " p-2 footerComponent">
                        <h1 className = "serviceTitle footerTitle">
                            Follow US</h1>
                             <a className ="socialLink" href = "#"><FontAwesomeIcon  icon={faFacebook} />Facebook</a> <br/>
                             <a className ="socialLink" href = "#"><FontAwesomeIcon  icon={faYoutube} />YouTube</a> 
                        

                        </Col>

                        <Col lg = {3} md = {6} sm = {12} className = " p-2 footerComponent">
                        <h1 className = "serviceTitle footerTitle">
                            Address</h1>
                            <p className="cardDescription">Shailkupa,Jhenidah</p>
                            <p className="cardDescription"><FontAwesomeIcon  icon={faEnvelope} />softdev.bd.123@gmail.com</p>
                            <p className="cardDescription"><FontAwesomeIcon  icon={faMobile} />+8801774276336</p>

                        </Col>
                        <Col lg = {3} md = {6} sm = {12} className = "p-2 footerComponent">
                        <h1 className = "serviceTitle footerTitle">
                            Information</h1>
                             <a className = "informationLink" href = "#">About Us</a> <br/>
                             <a className = "informationLink" href = "#">My Resume</a> <br/>
                            <a className = "informationLink" href = "#">Contact Me</a> 

                        </Col>
                        <Col lg = {3} md = {6} sm = {12} className = "p-2 footerComponent">
                        <h1 className = "serviceTitle footerTitle">
                            Legal</h1>
                            <a className = "informationLink" href = "#">Refund Policy</a> <br/>
                             <a className = "informationLink" href = "#">Term And Condition</a> <br/>
                             <a className = "informationLink" href = "#">Privacy Policy</a> 

                        </Col>
                    </Row>
                </Container>

                <Container fluid = {true} className = "text-center copyRight">
                    <a href = "#">softDev &copy; 2021-2022</a>
                </Container>
                
            </Fragment>
        );
    }
}

export default Footer;