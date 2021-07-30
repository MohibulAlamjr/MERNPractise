import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card,Container,Row,Col } from 'react-bootstrap';

export default function Clock() {
    // This is Clock Hooks
    let time =new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState(time);
    const UpdateTime =() =>{

        time =new Date().toLocaleTimeString();
        setCtime(time);
    };
    // This is Count Hooks
    const [count,setCount]=useState(0)
    const handleIncrement = () =>{
        setCount(count+1);
    }  
    setInterval(UpdateTime,1000)
    return( 

    <Container>
        <Row>
          <Col>   
                        <Card className ="card">
                            <div className="title" ><h1>Digital Clock using React JS</h1> </div>   
                            
                            
                            <h1 className="clock">{ctime}</h1>
                        
                        </Card>          
          </Col>
          <Col>

                    <Card className ="card">
                        <div className="title" ><h1>This is a simple Counting Machine using React JS</h1> </div>   
                        <h1 className="count">Count : {count}</h1>  
                        <span> <Button variant="danger" onClick={handleIncrement} className="mystyle">Increment</Button>
                        <Button variant="warning" onClick={()=> setCount(prev=>prev-1)} className="mystyle">Decrement</Button></span>
                        <span> <Button variant="success" onClick={()=>setCount(0)} className="mystyle">Reset</Button></span>
                    </Card>
         </Col>
        </Row>
       
    </Container>




 
        
       
           
            


    
)};
