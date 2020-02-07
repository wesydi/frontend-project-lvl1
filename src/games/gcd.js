import randomNumber from '../utils';
import runGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getCommonDivider = (number1, number2) => {
  let commonDivider;
  for (let divisor = 1; divisor < 100; divisor += 1) {
    if (number1 % divisor === 0 && number2 % divisor === 0) commonDivider = divisor;
  }
  return commonDivider;
};

const genGameData = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1}, ${num2}`;
  const correctAnswer = String(getCommonDivider(num1, num2));
  return [correctAnswer, question];
};

const startGcd = () => runGame(genGameData, description);

export default startGcd;
