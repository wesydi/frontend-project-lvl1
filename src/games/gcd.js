import randomNumber from '../utils';
import engine from '..';

const getCommonDivider = (number1, number2) => {
  let answer = '';
  for (let i = 0; i < 100; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) answer = i;
  }
  return answer;
};

const gameGcd = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const question = `${num1}, ${num2}`;
  const correctAnswer = String(getCommonDivider(num1, num2));
  return [correctAnswer, question];
};

const gcd = () => {
  console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');
  return engine(gameGcd);
};
export default gcd;
