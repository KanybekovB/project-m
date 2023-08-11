const btn = document.querySelector('.btn');
const inputNumber = document.querySelector('#inputNumber');
const resultsElement = document.querySelector('.results');
const inputValue = parseFloat(inputNumber.value);  


btn.onclick = (event) => {
    event.preventDefault();
    let count = prompt('сколько раз умножить')
    if (!isNaN(inputValue)) {
        resultsElement.innerHTML = ''; // Очищаем предыдущие результаты
        for (let i = 0; i < count; i++) {
          inputValue * 2;
          const resultDiv = document.createElement('div');
          resultDiv.innerHTML = `Шаг ${i + 1}: ${inputValue}`;
          resultsElement.appendChild(resultDiv);
        }
      } else {
        resultsElement.innerHTML = 'Пожалуйста, введите число.';
      }
}

const monthBtn = document.querySelector('.month-btn');
const monthNumber = document.querySelector('#month');
const resultElement = document.querySelector('.result_month');


monthBtn.onclick = () => {
    console.log(monthNumber.value)
    switch (parseInt(monthNumber.value)) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
          resultElement.innerHTML = `В месяце ${monthNumber.value} - 31 день.`;
          break;
        case 4: case 6: case 9: case 11:
          resultElement.innerHTML = `В месяце ${monthNumber.value} - 30 дней.`;
          break;
        case 2:
          resultElement.innerHTML = `В месяце ${monthNumber.value} - 28 или 29 дней (в зависимости от високосного года).`;
          break;
        default:
          resultElement.innerHTML = 'Некорректный номер месяца.';
    }
    
}

const start = document.querySelector('.start_calculator');
const resultCalc = document.querySelector('.result-calculator');

start.onclick = () => {
    let firstNumber = prompt('введите первое число')
    let secondNumber = prompt('введите второе число')
    let operator = prompt('что сделать? +, -, *, /')
    let result

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultElement.textContent = 'Пожалуйста, введите корректные числа.';
        return;
      }
    
      if (operator === '+') {
        result = firstNumber + secondNumber;
      } else if (operator === '-') {
        result = firstNumber - secondNumber;
      } else if (operator === '*') {
        result = firstNumber * secondNumber;
      } else if (operator === '/') {
        if (secondNumber === 0) {
          resultElement.textContent = 'Деление на ноль невозможно.';
          return;
        }
        result = firstNumber / secondNumber;
      } else {
        resultElement.textContent = 'Некорректный оператор.';
        return;
      }
      
      resultElement.textContent = `Результат: ${result}`;
}