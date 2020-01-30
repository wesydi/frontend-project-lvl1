import randomNumber from '../utils';
import engine from '..';

const gameMessage = 'Find the greatest common divisor of given numbers.';

const getCommonDivider = (number1, number2) => {
  let commonDivider;
  for (let i = 1; i < 100; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) commonDivider = i;
  }
  return commonDivider;
};

const gameGcd = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1}, ${num2}`;
  const correctAnswer = String(getCommonDivider(num1, num2));
  return [correctAnswer, question, gameMessage];
};

const gcd = () => engine(gameGcd);

export default gcd;
