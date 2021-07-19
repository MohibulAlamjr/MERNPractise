
function Number() {
    var d = new Date();
    var second = d.getSeconds();
    var minute = d.getMinutes();
    var hours = d.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;

    document.getElementById("number").innerHTML= hours + " " + minute +" " + second + " " + ampm;


  }
  setInterval(Number, 1000); 

