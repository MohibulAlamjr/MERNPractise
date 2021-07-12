var myArray =[230,405,1300];
var result= -Infinity;

for (let i = 0;i < myArray.length; i++){
    
    if(result > myArray[i]){
        result = result;
    }else{
        result = myArray[i];
    }
}
console.log(result)