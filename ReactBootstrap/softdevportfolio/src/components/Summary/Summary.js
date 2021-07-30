import React, { Component, Fragment } from 'react';
import {Container, Row , Col,Button} from 'react-bootstrap';

class Summary extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid className="summaryBanner summarySection">
                    <div className="summaryBannerOverlay">
                       <Container className="text-center">
                           <Row>
                               <Col lg={8} md={6} sm={12}>
                                   <Row className="countSection">
                                   <Col>
                                      <h1 className="countNumber">100</h1>
                                      <h4 className="countTitle">Total Projects</h4>
                                      <hr className="bg-white w-25 bar"/>

                                   </Col>
                                  
                                   <Col>
                                      <h1 className="countNumber">100</h1>
                                      <h4 className="countTitle">Total Clients</h4>
                                      <hr className="bg-white w-25 bar"/>
                                   </Col>
                                   </Row>
                               
                               </Col>

                               <Col lg={8} md={6} sm={12}>
                               
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;