function fact(a){
    var result=1;
    while(a>1){
        result = result*a;
        a--;
    }
    return result;
}

var result = fact(5);
console.log(result)