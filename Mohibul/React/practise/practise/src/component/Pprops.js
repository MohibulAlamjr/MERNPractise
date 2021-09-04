import React, { useState } from 'react';

const Pprops = () => {
    const [x,value]= useState(1);
    const [y,valuen]= useState(1);
    
    function Chnagehandel(){
        value(x+1)
    }

    function Chnagehandel1(){
        valuen(y+1)
    }
    return (
        <>
          <h1 onClick={Chnagehandel}> Use state count: {x}</h1> 
          <h1 onClick={Chnagehandel1}> Use state 2nd count: {y}</h1>  
        </>
    );
};

export default Pprops;