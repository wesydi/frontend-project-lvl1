import randomNumber from '../utils';
import engine from '..';

const isPrime = (num) => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) array.push(i);
  }
  return (array.length === 2 && array[0] === 1 && array[1] === num);
};

const gamePrime = () => {
  const number = randomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const prime = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');
  return engine(gamePrime);
};

export default prime;
