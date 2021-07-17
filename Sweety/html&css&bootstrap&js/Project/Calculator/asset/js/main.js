
const buttons = document.querySelectorAll('button');
 
const input = document.querySelector('.input');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});


function calculate(event) {
  
  const clickedButton = event.target.value;

  if (clickedButton === '=') {
    if (input.value !== '') {
      
        input.value = eval(input.value);
    }
  } 
  else if (clickedButton === 'C') {
     
    input.value = '';
  } 
  else {
    
    input.value += clickedButton;
  }
}