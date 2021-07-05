

// for (let i=a; i>1;i--){
//      result = result*i;
    
// }
// console.log(result);

function fact(a){
    var result=1;
    while(a>1){
        result = result*a;
        a--;
    }
    return result;
}

var nani = fact(5);
console.log(nani);
var dadi = fact(10);
console.log(dadi);
var mami = fact(3);
console.log(mami);


