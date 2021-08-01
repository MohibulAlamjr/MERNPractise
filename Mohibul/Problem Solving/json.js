const  myOb={
    name :'Mohibul',
    age:20,
    prof:"Developer"
}

console.log("main object", myOb);
const x = JSON.stringify(myOb);
console.log("Json object",x);
const b = JSON.parse(x);
console.log(b);