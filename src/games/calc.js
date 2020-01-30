import randomNumber from '../utils';
import engine from '..';

const gameMessage = 'What is the result of the expression?';

const operations = ['*', '+', '-'];

const calculator = (arg1, arg2, operator) => {
  switch (operator) {
    case '*': return arg1 * arg2;
    case '+': return arg1 + arg2;
    case '-': return arg1 - arg2;
    default: return "It's not correct operation. Please use '*' or '+' or '-'";
  }
};

const gameCalc = () => {
  const operation = operations[randomNumber(0, operations.length - 1)];
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calculator(num1, num2, operation));
  return [correctAnswer, question, gameMessage];
};

const calc = () => engine(gameCalc);

export default calc;
