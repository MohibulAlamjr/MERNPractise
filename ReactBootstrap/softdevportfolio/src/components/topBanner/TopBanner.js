import React, { Component, Fragment } from 'react';

import {Container, Row , Col,Button} from 'react-bootstrap';
import '../../asset/css/custom.css';


class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="topBanner">
                    <div className="topBannerOverlay">
                       <Container className="topContent">
                           <Row>
                               <Col>
                               <h2 className="topTitle">SOFTDEV LTD.</h2>
                               <h4 className="topSubTitle">Let's Thinks Out Of The Box</h4>
                               <Button className="RecentButton" variant="primary">More Info</Button>
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default TopBanner;