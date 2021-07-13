var a = [11,2,3,3,4,2,4,5,6,6,];
var Unique = [];

for (var i = 0; i<a.length; i++){
    var number = a[i];
    var index = Unique.indexOf(number);

    if(index==-1){
        Unique.push(number);
    }
}
console.log(Unique);