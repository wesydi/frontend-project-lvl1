import randomNumber from '../utils';
import engine from '..';

const gameMessage = `Answer "yes" if given number is prime. Otherwise answer "no".`;

const isPrime = (num) => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) array.push(i);
  }
  return (array.length === 2);
};

const gamePrime = () => {
  const number = randomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, question, gameMessage];
};

const prime = () => engine(gamePrime);

export default prime;
