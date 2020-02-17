import randomNumber from '../utils';
import runGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const array = [];
  for (let divisor = 1; divisor <= num; divisor += 1) {
    if (num % divisor === 0) array.push(divisor);
  }
  return (array.length === 2);
};

const genGameData = () => {
  const number = randomNumber(1, 101);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const startPrime = () => runGame(genGameData, description);

export default startPrime;
