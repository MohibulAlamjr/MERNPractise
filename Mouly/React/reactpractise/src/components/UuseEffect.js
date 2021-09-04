import React, {useEffect, useState} from 'react';

const UuseEffect = () => {


    const [nayok, setNayok] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then(data => setNayok(data))
       
    }, [])
 

    return (
        <>
            <ul>
               {
                nayok.map(data =>  '<li>' + data.name + '</li>')

                // year.map((value, index) => {
                //     return <option key={index}>{value}</option>
                //   })



               }
            </ul>
        </>
    );
};

export default UuseEffect;