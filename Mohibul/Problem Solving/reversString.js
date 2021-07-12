// revers letter 
var myString ="Hi I am  bad girl mouly ";
var newString='';

for(let i=myString.length-1; i >=0;i--){
   newString += myString[i];
}
console.log(newString)

// revers word 
const myArray = myString.split(" ");

var newArray=[];
for(i= myArray.length-1;i>=0;i--){
    newArray.push(myArray[i]);
}
console.log(newArray.join(' '));