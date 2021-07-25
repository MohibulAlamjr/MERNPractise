var a = 9;
var b = 6;
var c = 10;

if(a>b){
    if(a>c){

        console.log("a is a large number");
    }
    else{
        console.log("c is a large number");
    }   
}
else{
   if(b>c){
    console.log("b is a large number");
   }
   else{
       console.log("c is a large number");
   }
}



var x = 17;
var y = 90;
var z = 900;

var max = Math.max(x,y,z);

console.log("The maximum number is " ,max);