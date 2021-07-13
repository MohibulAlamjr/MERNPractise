var x = document.getElementsByClassName("number");
for(let i=0; i<x.length;i++){

    let item=x[i];
    item.addEventListener("click",function(){
        var text = this.innerHTML;
        CreateString(text)
    })
}
var myString ='';
function CreateString(text){
    myString+=text +" ,";

}
