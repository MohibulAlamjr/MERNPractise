import React, { Component, Fragment } from 'react';
import { Col,Container,Row,Card,Button,Image,Form} from 'react-bootstrap';
import 'react-bootstrap';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/mycss.css';
import Lr from '../../asset/images/Lr (2).svg';
import Ps from '../../asset/images/Ps.svg';
import Cloud from '../../asset/images/creative-cloud.svg';
import PDF from '../../asset/images/pdf.svg';
import Pr from '../../asset/images/Pr.svg';
import Ai from '../../asset/images/Ai.svg';
import Id from '../../asset/images/id.svg';
import Ae from '../../asset/images/Ae.svg';

class Cardd extends Component {
    render() {
        return (
            <Fragment>
               <Container fluid>
                   <Row>
                       <Col>
                       <Card className="card" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Image className="imageLr" src={Lr}/>
                                <Image className="imagePs" src={Ps}/>
                                <h5 className="photoGraphy">Photography  (20GB)</h5>
                                <Card.Title className="US">US$9.99/mo</Card.Title>
                                <p className="para">
                                Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).<br/> <a href="#">Compare photography plans<br/> See plan & pricing details</a>
                                </p>
                                    <Form.Check type="checkbox" label="Add Adobe Stock.Get a 30-day free trial.*"/>
                                    <Button className="firstButton">Buy Now</Button>
                            </Card.Body>
                            </Card>
                       </Col>

                       <Col>
                       <Card className="card" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Image className="imageLr" src={Cloud}/>
                                <Button className="timeOffer">Limited-time offer</Button>
                                <h5 className="photoGraphy">All Apps</h5>
                                <Card.Title className="US">US$9.99/mo</Card.Title>
                                <p className="para">
                                Save 25% on 20+ creative apps, including Photoshop, Illustrator, and Acrobat Pro. Ends Aug 13. <a href="#">See terms.<br/>See plan & pricing details</a>
                                </p>
                                    <Form.Check className="checkBox" type="checkbox" label="Add Adobe Stock.Get a 30-day free trial.*"/>
                                    <Button className="firstButton">Buy Now</Button>
                            </Card.Body>
                            </Card>
                       </Col>

                       <Col>
                       <Card className="card" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Image className="imageLr" src={PDF}/>
                                <h5 className="photoGraphy">Acrobat Pro</h5>
                                <Card.Title className="US">US$14.99/mo</Card.Title>
                                <p className="para">
                                he complete PDF solution for working anywhere (includes desktop, web, and mobile access).<br/> <a href="#">See plan & pricing details</a>
                                </p>
                                    <Form.Check className="checkBox" type="checkbox" label="Add Adobe Stock.Get a 30-day free trial.*"/>
                                    <Button className="firstButton">Buy Now</Button>
                            </Card.Body>
                            </Card>
                       </Col>

                       <Col>
                       <Card className="card" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Image className="imagePs" src={Ps}/>
                                <h5 className="photoGraphy">Photography  (20GB)</h5>
                                <Card.Title className="US">US$9.99/mo</Card.Title>
                                <p className="para">
                                Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).<br/> <a href="#">Compare photography plans<br/> See plan & pricing details</a>
                                </p>
                                    <Form.Check type="checkbox" label="Add Adobe Stock.Get a 30-day free trial.*"/>
                                    <Button className="firstButton">Buy Now</Button>
                            </Card.Body>
                            </Card>
                       </Col>
                   </Row>
               </Container>

               <Container fluid>
                   <Row>
                       <Col>
                       <Card className="card" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Image className="imageLr" src={Pr}/>
                                <h5 className="photoGraphy">PPremiere Pro</h5>
                                <Card.Title className="US">US$20.99/mo</Card.Title>
                                <p className="para">
                                Professional video and film editing.<br/> <a href="#">See plan & pricing details</a>
                                </p>
                                    <Form.Check className="AddAdobe" type="checkbox" label="Add Adobe Stock.Get a 30-day free trial.*"/>
                                    <Button className="firstButton">Buy Now</Button>
                            </Card.Body>
                            </Card>
                       </Col>

                       <Col>
                       <Card className="card" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Image className="imageLr" src={Ai}/>
                                <h5 className="photoGraphy">Illustrator</h5>
                                <Card.Title className="US">US$20.99/mo</Card.Title>
                                <p className="para">
                                Create precise designs, Illustrations, and vector graphics on desktop and iPad.<br/> <a href="#">See plan & pricing details</a>
                                </p>
                                    <Form.Check className="checkBox2" type="checkbox" label="Add Adobe Stock.Get a 30-day free trial.*"/>
                                    <Button className="firstButton">Buy Now</Button>
                            </Card.Body>
                            </Card>
                       </Col>

                       <Col>
                       <Card className="card" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Image className="imageLr" src={Id}/>
                                <h5 className="photoGraphy">InDesign</h5>
                                <Card.Title className="US">US$20.99/mo</Card.Title>
                                <p className="para">
                                Page design and layout for print and digital media.<br/> <a href="#">See plan & pricing details</a>
                                </p>
                                    <Form.Check className="checkBox2" type="checkbox" label="Add Adobe Stock.Get a 30-day free trial.*"/>
                                    <Button className="firstButton">Buy Now</Button>
                            </Card.Body>
                            </Card>
                       </Col>

                       <Col>
                       <Card className="card" style={{ width: '20rem' }}>
                            <Card.Body>
                                <Image className="imagePs" src={Ae}/>
                                <h5 className="photoGraphy">After Effects</h5>
                                <Card.Title className="US">US$20.99/mo</Card.Title>
                                <p className="para">
                                Create motion graphics and visual effects for film, TV, video, and web.<br/> <a href="#">See plan & pricing details</a>
                                </p>
                                    <Form.Check className="checkBox2" type="checkbox" label="Add Adobe Stock.Get a 30-day free trial.*"/>
                                    <Button className="firstButton">Buy Now</Button>
                            </Card.Body>
                            </Card>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default Cardd;