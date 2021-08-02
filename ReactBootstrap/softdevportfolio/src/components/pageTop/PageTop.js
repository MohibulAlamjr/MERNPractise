import React from 'react';
import { Fragment } from 'react';
import {Container, Row , Col,} from 'react-bootstrap';
import '../../asset/css/custom.css';

const PageTop = () => {
    return (
        <Fragment>
                    <Container fluid className="topBanner">
                    <div className="topBannerOverlay">
                       <Container className="topContent">
                           <Row>
                               <Col>
                             
                               <h4 className="topSubTitle">Let's Thinks Out Of The Box</h4>
                               
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>
        </Fragment>
    );
};

export default PageTop;