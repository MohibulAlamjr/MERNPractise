import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../asset/images/logo.png';
import whitelogo from '../../asset/images/whitelogo.png';
import {NavLink} from 'react-router-dom';



export default class TopNavigation extends Component {


    constructor(props){
        super();
        this.state = {
            navBarTitle :"navTitle",
            navBarlogo :[whitelogo],
            navVariant:"dark",
            nabBackground : "transparent",
            navItem:"textWhite",
            ptitle:props.title
        }
    }

    onScroll =()=> {
        if (window.scrollY>100){
            this.setState ({navVariant:'light', navBarTitle: 'navTitleScroll', navBarlogo: [logo], nabBackground : 'light' , navItem:'textDark'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:"navTitle", navBarlogo :[whitelogo], nabBackground : 'transparent' , navItem:'textWhite'})
        }
    }

    componentDidMount (){
       window.addEventListener('scroll', this.onScroll) 
    }
    render() {
        return (
<Fragment>
    <title>{this.state.ptitle}</title>
<Navbar fixed ="top" collapseOnSelect expand="lg" bg={this.state.nabBackground} variant={this.state.nabBackground}>
    <Container fluid={true}  className="fixedMargin">
      
                <Navbar.Brand className = {this.state.navBarTitle}> <img id="logo" src ={this.state.navBarlogo} alt='logo'/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto topnav">
            </Nav>
            <Nav>
                
                <Nav.Link><NavLink activeStyle={{color:'#ffffff'}} className={this.state.navItem} to="/">HOME</NavLink> </Nav.Link>
                <Nav.Link><NavLink activeStyle={{color:'#F1865E'}} className={this.state.navItem} to="/myservices">SERVICES</NavLink></Nav.Link>
                <Nav.Link><NavLink activeStyle={{color:'#F1865E'}} className={this.state.navItem} to="/allcourses">COURSES</NavLink></Nav.Link>
                <Nav.Link><NavLink activeStyle={{color:'#F1865E'}} className={this.state.navItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                <Nav.Link><NavLink activeStyle={{color:'#F1865E'}} className={this.state.navItem} to="/contact">CONTACT</NavLink></Nav.Link>
                <Nav.Link><NavLink activeStyle={{color:'#F1865E'}} className={this.state.navItem} to="/about">ABOUT</NavLink></Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
</Fragment>
        )
    }
}
