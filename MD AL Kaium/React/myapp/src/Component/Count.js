import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button,Card } from 'react-bootstrap';


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



export default function Hooks() {
    const [count,setCount]=useState(0)
    const handleIncrement = () =>{
        setCount(count+1);
    }

    const handleDecrement = () =>{
        setCount(count-1);
    }
  
    
    return (
        <>  


<Card className ="card">
    <Card className="title" ><h1></h1> Count</Card>   
      <h1>Count : {count}</h1>  
    <span> <button onClick={handleIncrement} className="mystyle">Increment</button>
    <button onClick={handleDecrement} className="mystyle">Decrement</button></span>
</Card>
           

        </>
    )
}




