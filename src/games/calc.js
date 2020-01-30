import randomNumber from '../utils';
import engine from '..';

const operationFunc = (arg1, arg2, operator) => {
  let result = '';
  switch (operator) {
    case '*': result = arg1 * arg2;
      break;
    case '+': result = arg1 + arg2;
      break;
    default: result = arg1 - arg2;
  }
  return result;
};

const gameCalc = () => {
  const operations = ['*', '+', '-'];
  const operation = operations[randomNumber(0, operations.length - 1)];
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(operationFunc(num1, num2, operation));
  return [correctAnswer, question];
};

const calc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
  return engine(gameCalc);
};
export default calc;
