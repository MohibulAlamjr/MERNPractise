function countbrick(n){
    return n*1000;

}

function countFeet(a){
    var totalfeet=0;
    if(a<=10){
        totalfeet= a*15; 

    }else if(a<=20){
        let b = 10*15;
        let c = (a-10)*12;
        totalfeet = b+c;

    }else if(a>20){
        let b = 10*15;
        let c = 10*12;
        let d= (a-20)*10;
        totalfeet = b+c+d;

    }
    var result = countbrick(totalfeet);
    return result;
}
console.log(countFeet(10));