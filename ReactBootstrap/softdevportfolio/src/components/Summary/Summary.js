import React, { Component, Fragment } from 'react';
import {Container, Row , Col,Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AppearSensor from '../appear/AppearVisibility';

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
                                      <h1 className="countNumber">
                                      
                                      {/* <CountUp start={0} end={100} duration={5}>+
                                                     {({ countUpRef, start }) => (
                                                         <VisibilitySensor onChange={start} >
                                                             <span ref={countUpRef} />
                                                         </VisibilitySensor>
                                                     )}
                                                 </CountUp>
                                       */}
                                        <AppearSensor>
                                          {({ hasBeenVisible }) =>
                                          hasBeenVisible
                                          ? <CountUp
                                          start={0}
                                          end={100}
                                          duration={6} />
                                          : <span>100</span>
                                           }
                                          </AppearSensor>
                                      </h1>
                                      <h4 className="countTitle">Total Projects</h4>
                                      <hr className="bg-white w-25 bar"/>

                                   </Col>
                                  
                                   <Col>

                                      <h1 className="countNumber">
                                      
                                      
                                      {/* <CountUp start={0} end={100} duration={5}>+
                                                     {({ countUpRef, start }) => (
                                                         <VisibilitySensor onChange={start} delayedCall>
                                                             <span ref={countUpRef} />
                                                         </VisibilitySensor>
                                                     )}
                                                 </CountUp> */}
                                                  <AppearSensor>
                                          {({ hasBeenVisible }) =>
                                          hasBeenVisible
                                          ? <CountUp
                                          start={0}
                                          end={100}
                                          duration={6} />
                                          : <span>100</span>
                                           }
                                          </AppearSensor>
                                      
                                      </h1>
                                      <h4 className="countTitle">Total Clients</h4>
                                      <hr className="bg-white w-25 bar"/>
                                   </Col>
                                   </Row>
                               
                               </Col>

                               <Col lg={4} md={6} sm={12}>
                               <Card className = "summaryCard" style={{ width: '18rem' }}>


 
                              <Card.Body>
                              <Card.Title className = "cardTitle ">How i Work</Card.Title>
                               <Card.Text>
                            <p className = "cardSubTitle "> <FontAwesomeIcon className = "icon" icon={faCheckCircle} /> Requirement Gathering</p>
                            <p className = "cardSubTitle "><FontAwesomeIcon className = "icon" icon={faCheckCircle} />System Analysis</p>
                            <p className = "cardSubTitle "><FontAwesomeIcon className = "icon" icon={faCheckCircle} />Coding Testing</p>
                         <p className = "cardSubTitle "><FontAwesomeIcon className = "icon" icon={faCheckCircle} />Implementation</p>
                      </Card.Text>
    
                     </Card.Body>
                         </Card>
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