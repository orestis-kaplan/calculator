import operate from './operate';

function division(total, operator, negative) {
  let right = ''; let left = '';
  let symbol = (negative) ? `[${total.match(operator)[1]}]` : `[${total.match(operator)[0]}]`;
  let operatorPosition = 0;

  symbol = new RegExp(symbol);
  operatorPosition = total.search(symbol);
  if (total.match(operator)[1] === '-') { operatorPosition = total.indexOf('-', 1); }

  left = total.slice(0, operatorPosition);

  right = total.slice(operatorPosition + 1, total.length - 1);

  return [left, right];
}

export default function calculate(data, buttonName) {
  const operator = /[+\-%÷x=]/g;
  let { total, next } = data;
  let firstNumber = 0;
  let secondNumber = 0;
  let negative = false;
  let symbol = '';

  if (buttonName === 'AC') {
    total = '';
  } else if (buttonName === '+/-') {
    total = (total * (-1)).toString();
  } else { total += buttonName; }

  if (total.match(operator) !== null && buttonName !== '+/-') {
    negative = (total[0] === '-');
    symbol = total.match(operator)[0];
    if (total.match(operator).length > 1 && !negative && symbol.match(operator)) {
      [firstNumber, secondNumber] = division(total, operator, negative);
      total = operate(Number(firstNumber), Number(secondNumber), symbol);
      total += buttonName;
      next = total;
    } else if (total.match(operator).length > 2 && negative && symbol.match(operator)) {
      symbol = total.match(operator)[1];
      [firstNumber, secondNumber] = division(total, operator, negative);
      total = operate(Number(firstNumber), Number(secondNumber), symbol);
      total += buttonName;
      next = total;
    } else if (negative && next !== '' && total.match(operator).length < 2) {
      total = buttonName;
      next = '';
    }

    if (buttonName === '=') { total = total.slice(0, total.length - 1); }
  } else if ((total.match(operator) === null || negative === true) && next !== '') {
    total = buttonName;
    next = '';
  }

  data.total = total;
  data.next = next;

  return data;
}