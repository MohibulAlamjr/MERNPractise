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
            navVariant:"dark",
            nabBackground : "transparent",
            navItem:"text-white"
        }
    }

    onScroll =()=> {
        if (window.scrollY>100){
            this.setState ({navVariant:'light', navBarTitle: 'navTitleScroll', navBarlogo: [logo], nabBackground : 'light' , navItem:'text-dark'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:"navTitle", navBarlogo :[whitelogo], nabBackground : 'transparent' , navItem:'text-white'})
        }
    }

    componentDidMount (){
       window.addEventListener('scroll', this.onScroll) 
    }
    render() {
        return (
<<<<<<< HEAD
<Fragment>
<Navbar fixed ="top" collapseOnSelect expand="lg" bg={this.state.nabBackground} variant={this.state.nabBackground}>
=======
            <Fragment>
               
                <Navbar fixed ="top" collapseOnSelect expand="lg" bg={this.state.nabBackground} variant={this.state.nabBackground}>
>>>>>>> e85b183927bf409d5e44d2da875671234e34e7a2
    <Container  className="fixedMargin">
      
                <Navbar.Brand className = {this.state.navBarTitle}> <img id="logo" src ={this.state.navBarlogo} alt='logo'/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto topnav">
            </Nav>
            <Nav>
                <Nav.Link className={this.state.navItem} href="#home">HOME</Nav.Link>
                <Nav.Link className={this.state.navItem} href="#services">SERVICES</Nav.Link>
                <Nav.Link className={this.state.navItem} href="#courses">COURSES</Nav.Link>
                <Nav.Link className={this.state.navItem} href="#portfolio">PORTFOLIO</Nav.Link>
                <Nav.Link className={this.state.navItem} href="#contact">CONTACT</Nav.Link>
                <Nav.Link className={this.state.navItem} href="#about">ABOUT</Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
<<<<<<< HEAD
</Fragment>
=======
 </Fragment>
>>>>>>> e85b183927bf409d5e44d2da875671234e34e7a2
        )
    }
}
