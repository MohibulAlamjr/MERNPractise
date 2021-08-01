
var array = [34,33,45,67,89,56,50];

var max = array[0];

for (let i = 0; i<array.length; i++){
    let number = array[i];
    if(number > max){
        max = number;
    }
}
console.log("The maximum array value is: " , max);
