import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


export default class TopNavigation extends Component {


    constructor(){
        super();
        this.state = {
            navBarTitle :"navTitle"
        }
    }

    onScroll =()=> {
        if (window.scrollY>100){
            this.setState ({navBarTitle: 'navTitleScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:"navTitle"})
        }
    }

    componentDidMount (){
       window.addEventListener('scroll', this.onScroll) 
    }
    render() {
        return (
            <Fragment>
                <Navbar fixed ="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className = {this.state.navBarTitle}>softDev</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#services">SERVICES</Nav.Link>
      <Nav.Link href="#courses">COURSES</Nav.Link>
      <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
      <Nav.Link href="#contact">CONTACT</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </Fragment>
        )
    }
}
