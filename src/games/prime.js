import randomNumber from '../utils';
import generateGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const array = [];
  for (let divisior = 1; divisior <= num; divisior += 1) {
    if (num % divisior === 0) array.push(divisior);
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
