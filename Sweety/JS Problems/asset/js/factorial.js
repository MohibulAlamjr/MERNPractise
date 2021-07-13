function factorial(a){
    var b=1;
    while(a>1){
        b = b*a;
        a--;
    }
    return b;
}

var b = factorial(8);
console.log(b);