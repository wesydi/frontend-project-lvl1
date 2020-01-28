import randomNumber from '../utils';
import engine from '..';

const isEven = (num) => (num % 2 === 0);

const gameEven = () => {
  const number = randomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const even = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
  return engine(gameEven);
};

export default even;
