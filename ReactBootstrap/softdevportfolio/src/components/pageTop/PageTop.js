import React, { Component, Fragment } from 'react';
import {Container,Col, Row} from 'react-bootstrap';
class PageTop extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid className="topPageBanner ">
                    <div className="topPageBannerOverlay">
                       <Container className="topPageContent">
                           <Row>
                               <Col className = "text-center">
                             
                               <h4 className="topPageTitle">{this.props.pageTitle}</h4>
                               
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