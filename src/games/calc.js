import randomNumber from '../utils';
import runGame from '..';

const description = 'What is the result of the expression?';

const operations = ['*', '+', '-'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '*': return number1 * number2;
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    default: return null;
  }
};

const genGameData = () => {
  const operation = operations[randomNumber(0, operations.length - 1)];
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operation));
  return [correctAnswer, question];
};

const startCalc = () => runGame(genGameData, description);

export default startCalc;
