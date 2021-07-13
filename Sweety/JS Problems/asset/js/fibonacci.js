var a=0;
var b=1;
var result = b;
for(var i=0;i<20;i++){
    result=a+b;
    console.log(result);
    a=b;
    b=result;
  
}