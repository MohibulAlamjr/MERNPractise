
// Login Button event Handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

})

// deposit Button event Handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    const depositNumber = getInputNumber("depositAmount");


    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerHTML;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // console.log(totalDeposit);
    // document.getElementById("currentDeposit").innerText = totalDeposit;


    updateSpanText("currentDeposit" , depositNumber);
    updateSpanText("currentBalance",depositNumber);

    document.getElementById("depositAmount").value = "";
})


// Withdraw button event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw",withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";

})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}

function updateSpanText(id , depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;

}