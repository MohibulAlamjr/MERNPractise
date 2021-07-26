const firstPerson = {
    firstName : "Rayma",
    lastName : "Sharin" ,
   EidShopping : 16000,
   getFullName : function(){
       console.log(this.firstName, this.lastName);
   },

   Savings : function (amount){
       this.EidShopping - amount;
       return this.EidShopping;
   }
}

const secondPerson = {
    firstName : "Riyana",
    lastName : "Rimu",
    EidShopping : 18000,
}

const thirdPerson = {
    firstName : "Zayaan",
    lastName : "Zaraf",
    EidShopping : 20000,
}

// firstPerson.Savings();
// for bind 
const secondSavings = firstPerson.Savings.bind(secondPerson);
secondSavings (5000);
secondSavings (8000);
console.log(secondPerson.EidShopping);