import React, { }from 'react';

function App() {
    
  return (
    <div className="App">
      <Adobe name=' Md AL Kaium' age='22'></Adobe>
      <Adobe name=' Jamal' age='22' ></Adobe>
      <Adobe name=' Jamal' age='22'></Adobe>
      <Adobe name='Kamal' age='22'></Adobe>                
    </div>
  );
}
// const [ value, setValue] = useState()

function Adobe(props){
  
  const adobeStyleStyle = {
    display:'inline-block',
    border: '2px solid purple',
    margin: '20px',
    width: '20%',
    height: '20rem'
   
  }
  return (
    <div style={adobeStyleStyle}>
      <h1> My Name : {props.name}</h1>
      <h3> I'm {props.age} years</h3>
    </div>

  )
}

export default App;