import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Container,Row,Col } from 'react-bootstrap';

export default function Clock() {
    // This is Clock Hooks
    let time =new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState(time);
    const UpdateTime =() =>{

        time =new Date().toLocaleTimeString();
        setCtime(time);
    };
      
    setInterval(UpdateTime,1000)
    return( 

    <Container>
        <Row>
          <Col>   
                        <Card >
                            {/* <div className="title" ><h1>Digital Clock using React JS</h1> </div>    */}
                            
                            
                            <h1>{ctime}</h1>
                        
                        </Card>          
          </Col>
         
        </Row>
       
    </Container>
    
)};
