
const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.buttons button');

let currentValue = '0';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;
    
    switch (buttonText) {
      case 'AC':
        currentValue = '0';
        break;
      case '±':
        currentValue = currentValue * -1;
        break;
      case '%':
        currentValue = currentValue / 100;
        break;
      case '=':
        try {
          // Replace operators for evaluation
          const expression = currentValue.replace('^', '**')
                                         .replace('mod', '%')
                                         .replace('÷', '/')
                                         .replace('×', '*');
          const result = eval(expression);
          currentValue = result;
        } catch (error) {
          currentValue = 'Error';
        }
        break;
      case '÷':
      case '×':
      case '-':
      case '+':
      case '^':
      case 'mod':
        if (currentValue !== '0' && !isNaN(currentValue.slice(-1))) {
          currentValue += buttonText;
        }
        break;
      default:
        if (currentValue === '0') {
          currentValue = buttonText;
        } else {
          currentValue += buttonText;
        }
    }
    
    // Update display
    display.textContent = currentValue;
  });
});
