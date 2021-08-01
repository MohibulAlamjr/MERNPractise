const  myObject={
    fastName : 'MD. Mohibul',
    lastName :'Alam',
    fullname: function(a){
       return (this.fastName +" " +this.lastName + a)
    } 
}

const mouly={
    fastName : 'Serajum',
    lastName :'Munira',
}

const sweety={
    fastName : 'sweety',
    lastName :'aktar',
}


const kaium={
    fastName : 'MD. Al',
    lastName :'Kaium',
}

// main function 
console.log(myObject.fullname(" CEO of softDev"));

// bind 
const moulName = myObject.fullname.bind(mouly);

console.log(moulName(' Web Developer in softDev'))

// call 
const sweetyName= myObject.fullname.call(sweety,' Web designer in softDev ');
console.log(sweetyName);

// apply 
const kaiumName=myObject.fullname.apply(kaium,[' Database designer at softDev']);
console.log(kaiumName);

