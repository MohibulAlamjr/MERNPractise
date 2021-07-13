var text1;
var keyArray=[];
document.addEventListener("keypress", function(event) {
	text1 = event.key;
    createStringKey(text1)
   
});

var myString1='';
function createStringKey(text){
   
    if(text == '+' ||text == '-'||text == '*'||text == '/'||text == '%'){
        keyArray.push(myString1) 
        keyArray.push(text) ;
        console.log(keyArray);
        myString1+=text;
         document.getElementById('exampleInputEmail1').innerHTML= myString1;
          
        myString1=''
     
        
     }else if(text=="Enter" ){
        keyArray.push(myString1) 
        console.log(keyArray)
        myString1+=text;
         document.getElementById('exampleInputEmail1').innerHTML= myString1;
     }else{
        myString1+=text;
        document.getElementById('exampleInputEmail1').innerHTML= myString1;
     }
    

      


}

// get number function 
    var x= document.getElementsByClassName("number");
    
    for(let i=0; i<x.length;i++){
   
       let item=x[i];
        item.addEventListener("click", function(){
             var text = this.innerHTML;

            CreateString(text)
        })
    }


// make string 
    var myString='';
    function CreateString(text){
         myString+=text;
         document.getElementById('exampleInputEmail1').innerHTML=new2 + myString;
    }
   
//    get oparator 
    var x= document.getElementsByClassName("oparator");
    for(let i=0; i<x.length;i++){
   
       let item=x[i];
        item.addEventListener("click", function(){
           var textOp = this.innerHTML;
            claculate(myString,textOp);
        })
    }
    // create arrya with first number and oprator
    var new2='';
    var number=[];
   function claculate(a,b){
       new2=a+b;
    document.getElementById('exampleInputEmail1').innerHTML=a+b;
       number.push(a);
       number.push(b);
    //    clear fristnumber from mystring to get next one 
       myString='';
   }

//    push 2nd number and calaculate math 
   
   
    document.getElementById("equal").addEventListener("click", function(){
        
       result( number, myString);
    })
   function result(myArray,lastNumber){
     myArray.push(lastNumber);
       let fnumber = parseFloat(myArray[0]);
       let lnumber =parseFloat( myArray[2]);
       let Opatator = myArray[1];
    //    final calculate and get result 
      var s;
       switch(Opatator){
      case '+': s = fnumber + lnumber;
      break;
      case '-': s = fnumber - lnumber;
      break;
      case '/': s = fnumber / lnumber;
      break;
      case '*': s = fnumber * lnumber;
      break;
      case '%': s = fnumber % lnumber;
      break;
       }
       document.getElementById('exampleInputEmail1').innerHTML=s;

       
   }
   function myClaculator(){
    window.location.reload();
}