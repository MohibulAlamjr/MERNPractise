import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';

export default function Hooks() {
    const [count,setCount]=useState(0)
    const handleIncrement = () =>{
        setCount(count+1);
    } 
        
    return (
        <>  


    <Card className ="card">
            <div className="title" ><h1>This is a simple Counting Machine</h1> </div>   
            <h1 className="count">Count : {count}</h1>  
            <span> <Button variant="danger" onClick={handleIncrement} className="mystyle">Increment</Button>
            <Button variant="warning" onClick={()=> setCount(prev=>prev-1)} className="mystyle">Decrement</Button></span>
            <span> <Button variant="success" onClick={()=>setCount(0)} className="mystyle">Reset</Button></span>
    </Card>
           

        </>
    )
}








// export default class Hooks extends Component {
//     constructor(props){

//         super(props)
//         this.state={
//             count :0
//         }


//     }
//     handleIncrement=()=>{
//         this.setState({
//             count: this.state.count+1
//         })
//     }

//     handleDecrement=()=>{
//         this.setState({
//             count: this.state.count-1
//         })
//     }

//     render() {
//         const {count} =this.state;
//         return (
//             <>
//             <h1>Count : {count}</h1>
//               <span> <button onClick={this.handleIncrement}>Increment</button> 
//                <button onClick={this.handleDecrement}>Decrement</button> </span>
//             </>
//         )
//     }
// }
