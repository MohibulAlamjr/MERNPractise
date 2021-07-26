function leapYear(){
    var year = document.getElementById("number").nodeValue;

if(year%4 == 0){
    console.log("leap Year");
}
else if(year%100 == 0){
    console.log("Not a leap year");
}
else if(year%400 == 0){
    console.log("Leap Year");
}
else{
    console.log("Not a Leap Year");
}
}