

   
       var input='London'
      const myKey = "56c997b35f3dabff8cb69c54da778e8f";
  
      //make request to url
  
      const response =  fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data =  response.json();
  
      console.log(data);
  
      
   

    getCurrent()
    
 