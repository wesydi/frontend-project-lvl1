import randomNumber from '../utils';
import generateGame from '..';

const description = 'What is the result of the expression?';

const operations = ['*', '+', '-'];

const calculator = (number1, number2, operator) => {
  switch (operator) {
    case '*': return number1 * number2;
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    default: return "It's not correct operation. Please use '*' or '+' or '-'";
  }
};

const gameCalc = () => {
  const operation = operations[randomNumber(0, operations.length - 1)];
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calculator(num1, num2, operation));
  return [correctAnswer, question];
};

const calc = () => generateGame(gameCalc, description);

export default calc;
