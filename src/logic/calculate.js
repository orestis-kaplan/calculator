import operate from './operate';

function division(total, operator, negative) {
  let right = ''; let left = '';
  let symbol = (negative) ? `[${total.match(operator)[1]}]` : `[${total.match(operator)[0]}]`;
  let operatorPosition = 0;

  symbol = new RegExp(symbol);
  operatorPosition = total.search(symbol);
  if (total.match(operator)[1] === '-') { 
    operatorPosition = total.indexOf('-', 1);
  }
  if(total.match(operator)[1] === '-' && total.match(operator)[0] !== '-'){
    operatorPosition = total.indexOf(total.match(operator)[0],0);
  }

  left = total.slice(0, operatorPosition);

  right = total.slice(operatorPosition + 1, total.length - 1);

  return [left, right];
}

function doubleDot(total,buttonName){    
  if ((/\./g).test(total) && total.match(/\./g).length > 1 && buttonName === '.')
    return true
  else 
    return false
}

function doubleOperator(total,operator){
  let doubleOp = false;
    for (let i = 0; i < total.length; i++) {
      if(operator.test(total[i]) && operator.test(total[i+1]))
        doubleOp = true;      
    }
  return doubleOp;
}

function divByZero(symbol,secondNumber){
  if(symbol === '÷' && secondNumber === '0')
    return true
}

export default function calculate(data, buttonName) {
  const operator = /[+\-%÷x=]/g;
  let { total, next, operation } = data;
  let firstNumber = 0;
  let secondNumber = 0;
  let negative = false;
  let symbol = '';

  if (buttonName === 'AC') {
    total = '';
    buttonName = '';
  } else if (buttonName === '+/-') {
    total = (total * (-1)).toString();    
  } else if(operation){
    total = '';
    operation = '';
    total += buttonName
  }else { total += buttonName; }

  if (total.match(operator) !== null && buttonName !== '+/-') {
    negative = (total[0] === '-');
    symbol = total.match(operator)[0];
    if (total.match(operator).length > 1 && !negative && symbol.match(operator)) {      
      [firstNumber, secondNumber] = division(total, operator, negative);
      if(divByZero(symbol,secondNumber)){
        total = 'Inf ';
      }else{
        total = operate(Number(firstNumber), Number(secondNumber), symbol);
        total += buttonName;
      }
      next = total;
    }else if (total.match(operator).length > 2 && negative && symbol.match(operator)) {
      symbol = total.match(operator)[1];
      [firstNumber, secondNumber] = division(total, operator, negative);
      total = operate(Number(firstNumber), Number(secondNumber), symbol);
      total += buttonName;
      next = total;
    }else if(total[total.length - 2] && !total.match(operator)[1]){
      if(total[total.length - 2].match(operator) && total[total.length - 1].match(operator)){
        let pos = total.search(operator);      
        total = total.slice(0,pos);
      }
    }else if (negative && next !== '' && total.match(operator).length < 2) {      
      total = buttonName;
      next = '';
    }else{      
      next = '';
    }

    if (buttonName === '=') {
      total = total.slice(0, total.length - 1);
      operation = '=';
    }

  } else if ((total.match(operator) === null || negative === true) && next !== '' && buttonName !== '+/-') {
    total = buttonName;
    next = '';
  }
  if(doubleDot(total,buttonName) || doubleOperator(total,operator))
    total = total.slice(0, total.length - 1);    
  
  data.total = total;
  data.next = next;
  data.operation = operation;

  return data;
}
