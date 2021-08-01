const myDetails = {
    firstName : "Shovhana",
    lastName : "Sweety" ,
   salary : 2300000,
   getFullName : function(){
       console.log(this.firstName, this.lastName);
   },

   chargeBill : function (amount){
       console.log(this);
       this.salary - amount;
       return this.salary;
   }
}

const myCousin = {
    firstName : "Mayra",
    lastName : "Islam",
    salary : 320000,
}

const myChild = {
    firstName : "Sabrina",
    lastName : "Awashi",
    salary :400000,
    
   chargeBill : function (amount){
    console.log(this);
    this.salary - amount;
    return this.salary;
}
}

// myDetails.chargeBill();

const myChargeBill = myDetails.chargeBill.bind(myChild);
myChargeBill(2000);
myChargeBill(5000);
myChargeBill(7000);


const myChargeBilll = myDetails.chargeBill.bind(myCousin);
myChargeBilll(300);
myChargeBilll(300000);
console.log(myCousin.salary);

const myChargeBillll = myChild.chargeBill.bind(myCousin);
myChargeBillll(9000);
