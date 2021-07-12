var myArray=['mohibul','mouly','mohibul','sweety','mouly','kaium'];
var len=myArray.length;

for (let i = 0;i < len;i++){
   for(let j = i+1; j < len;j++){
       
       if(myArray[i] === myArray[j]){
        myArray.splice(j, 1);
       }
   }

}
console.log(myArray);
