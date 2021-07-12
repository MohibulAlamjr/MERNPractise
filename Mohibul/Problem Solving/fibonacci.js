var a=0;
var b=1;


console.log(a);
console.log(b);
for(i=0;i<=5;i++){
    a=a+b;
    console.log(a);
    c=a;
    a=b;
    b=c;
}