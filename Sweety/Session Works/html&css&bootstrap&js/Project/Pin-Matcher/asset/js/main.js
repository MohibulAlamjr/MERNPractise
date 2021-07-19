// Common Function 

function emptyValue(id){
    document.getElementById(id).value - "";
}

// Empty Text 

function emptyText(id){
    document.getElementById(id).innerText = "";
}

// Display None 

function displayNone(id){
    document.getElementById(id).style.display = "none";
}

// Display Block

function displayBlock(id){
    document.getElementById(id).style.display = "block";
}

// Generate Random Number 

function randomNumFun(){
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("generatePin").value = randomNumber;

    emptyValue("inputPin");
    displayNone("matched");
    displayNone("unmatched");
    
}

// Input Number Value 

function handler(id){
    let inputValue = document.getElementById("inputPin").value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById("inputPin").value = inputValue + key;
}

// Clear Value 

function clean(){
    document.getElementById("inputPin").value = "";
}

function cleanLast(){
    var result = document.getElementById("inputPin").value;
    var remove = result.slice(0, result.length - 1);
    document.getElementById("inputPin").value = remove;
}


// Submit Button 

function submit(){
    var randomNumber = document.getElementById("generatePin").value;
    var typeNum = document.getElementById("inputPin").value;

    if(randomNumber == typeNum){
        displayBlock("matched");
        displayNone("unmatched");
        displayNone("try");
    }
    else{
        displayBlock("unmatched");
        displayNone("matched");
        tryLeft("tryLeft");
        displayBlock("try");
    }
}

// Try 3 Left 

function tryLeft(id){
    var tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if (tryAgain == "1"){
        disabled("submit");
    }
}

// Disabled 

function disabled(id){
    let button = document.getElementById(id);
    button.style.cursor = "not-allowed";
    button.setAttribute("disabled","true");
    button.title = "Reload";
}