

// for (let i=a; i>1;i--){
//      result = result*i;
    
// }
// console.log(result);

// function fact(a){
//     var result=1;
//     while(a>1){
//         result = result*a;
//         a--;
//     }
//     return result;
// }

// var nani = fact(5);
// console.log(nani);
// var dadi = fact(10);
// console.log(dadi);
// var mami = fact(3);
// console.log(mami);
// var a=0;
// var b=1;


// console.log(a);
// console.log(b);
// for(i=0;i<=20;i++)
//     a=a+b;
//     console.log(a);
//     c=a;
//     a=b;
//     b=c;
// }


// function travars(myarray,a){
//        console.log(a);
//     for(i=0; i< myarray.length;i++){
        
//         console.log( myarray[i]); 
//     }
// }

// travars([12,34,5,6,77,88,80,889],"mohibul's")
// travars(["mohibul","mouly","kaium","sweety"] ,"kaium's")



// function countbrick(n){
//     return n*1000;

// }

// function countFeet(a){
//     var totalfeet=0;
//     if(a<=10){
//         totalfeet= a*15; 

//     }else if(a<=20){
//         let b = 10*15;
//         let c = (a-10)*12;
//         totalfeet = b+c;

//     }else if(a>20){
//         let b = 10*15;
//         let c = 10*12;
//         let d= (a-20)*10;
//         totalfeet = b+c+d;

//     }
//     var result = countbrick(totalfeet);
//     return result;
// }






// console.log(countFeet(10));
// console.log(countFeet(220));
// console.log(countFeet(4));
// console.log(countFeet(2));


// const myArray=[45,44,67];
// console.log(Math.max(...myArray));

// const softDev={
//     CEO:{
//         name:"mohibul",
//         id:'0012',
//         address:{
//             vall:"x",
//             zill:"y",
//             po:{
//                 fst:" gh",
//                 send:"hj",
//                 thred:['hi','hellow','bye']
//             }

//         }
//     } ,
//     React_bootstrap_Developer:"sweety",
//     React_ANTD_Developer:"Mouly",
//     React_tawind_Developer:"kaium"
    
// }
// const {thred} = softDev.CEO.address.po;
// const[x,y,z]=thred;
// console.log(z);
// const softDevArray=["mohibul","sweety","Mouly","kaium"];


// var number=[6,7,8,9,10];

// number.map((x,y,z)=>{
// //     console.log(`${x*x} index is ${y}`);
// // 
//  if(x<=8){
//      console.log(x);
     
//  }

// })

const student = [
    {id:23,name:"mohibul"},
    {id:23,name:"kaium"},
    {id:23,name:"sweety"},
    {id:23,name:"mouly"}
];
var myName=[];
 student.map(x=>{
     
     myName.push(x.name);
 })
 console.log(myName);








