import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';
import whitelogo from '../../asset/images/whitelogo.png';


export default class TopNavigation extends Component {


    constructor(){
        super();
        this.state = {
            navBarTitle :"navTitle",
            navBarlogo :[whitelogo],
            nabBackground : "dark"
        }
    }

    onScroll =()=> {
        if (window.scrollY>100){
            this.setState ({navBarTitle: 'navTitleScroll', navBarlogo: [logo], nabBackground : 'transparent ' })
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:"navTitle", navBarlogo :[whitelogo], nabBackground : 'dark'})
        }
    }

    componentDidMount (){
       window.addEventListener('scroll', this.onScroll) 
    }
    render() {
        return (
            <Fragment>
                <Navbar fixed ="top" collapseOnSelect expand="lg" bg={this.state.nabBackground} variant={this.state.nabBackground}>
  <Container>
      
  <Navbar.Brand className = {this.state.navBarTitle}> <img id = "logo" src = {this.state.navBarlogo}/> </Navbar.Brand>
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
