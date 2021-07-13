var word = "Hello softDev .I am from My house.";
var count = 0;
for (var i = 0; i<word.length ; i++){
    var letter = word[i];
    if(letter == " "){
        count++;

    }
}
count++;
console.log(count);