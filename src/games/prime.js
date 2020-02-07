import randomNumber from '../utils';
import generateGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) array.push(i);
  }
  return (array.length === 2);
};

const genGameData = () => {
  const number = randomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const startPrime = () => generateGame(genGameData, description);

export default startPrime;
