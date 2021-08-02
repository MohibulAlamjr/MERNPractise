import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Description = () => {
    return (
       <Fragment>
           <Container>
               <Row>
                   <Col className=' mt-5' lg={12} md={12} sm={12}>
                   <h1 className="cardTitle">Who I am</h1>
                   <hr/>
                   <p className="cardDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                   </Col>

                   <Col className=' mt-5' lg={12} md={12} sm={12}>
                   <h1 className="cardTitle">My Mission</h1>
                   <hr/>
                   <p className="cardDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                   </Col>

                   <Col className=' mt-5' lg={12} md={12} sm={12}>
                   <h1 className="cardTitle">My Vision</h1>
                   <hr/>
                   <p className="cardDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                   </Col>
               </Row>
           </Container>
       </Fragment>
    );
};

export default Description;