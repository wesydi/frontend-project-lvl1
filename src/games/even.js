import randomNumber from '../utils';
import generateGame from '..';

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const gameEven = () => {
  const number = randomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [correctAnswer, question, gameMessage];
};

const even = () => generateGame(gameEven);

export default even;
