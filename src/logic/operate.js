import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  if (operation === '+') {
    console.log(numberOne, numberTwo);
    return Big(numberOne).plus(numberTwo).toString();
  }
  if (operation === '-') { return Big(numberOne).minus(numberTwo).toString(); }
  if (operation === '÷') { return Big(numberOne).div(numberTwo).toString(); }
  if (operation === 'x') { return Big(numberOne).times(numberTwo).toString(); }
  if (operation === '%') { return Big(numberOne).mod(numberTwo).toString(); }
  return 0;
}
