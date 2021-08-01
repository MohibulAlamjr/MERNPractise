import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import carouselImage  from '../../asset/images/reviewImage.png';

class ClientReview extends Component {
    render() {

        var settings = {
            autoplaySpeed:2000,
            autoplay:true,
            dots: true,
            infinite: true,
            vertical:true,
            verticalSwiping:true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
           
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <Fragment>
                <Container className = "text-center">
                <h1 className = "serviceTitle">
                            CLIENT SAYS
                        </h1>
                        <Slider {...settings}>
                            <div>
                                <Row className ="text-center">
                                    <Col className="slider" lg = {6} md = {6} sm = {12}>
                                    <img className = "circleImage" src = {carouselImage}/>

                                    <h1 className="cardTitle text-center">Web Development</h1>
                                    <p className="cardDescription text-center ">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding.</p>

                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className ="text-center">
                                    <Col className="slider" lg = {6} md = {6} sm = {12}>
                                    <img className = "circleImage" src = {carouselImage}/>

                                    <h1 className="cardTitle text-center">Web Development</h1>
                                    <p className="cardDescription text-center">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding.</p>

                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className ="text-center">
                                    <Col  className="slider" lg = {6} md = {6} sm = {12}>
                                    <img className = "circleImage" src = {carouselImage}/>

                                    <h1 className="cardTitle text-center">Web Development</h1>
                                    <p className="cardDescription text-center">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding.</p>

                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                </Container>
       
            </Fragment>
        );
    }
}

export default ClientReview;