import React, { Component, Fragment } from 'react';

import {Container, Row , Col,Button} from 'react-bootstrap';
import '../../asset/css/custom.css';


class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="topBanner">
                    <div className="topBannerOverlay">
                       <Container className="topContent">
                           <Row>
                               <Col>
                               
                               <h4 className="topSubTitle">{this.props.pageTitle}</h4>
                               
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default PageTop;