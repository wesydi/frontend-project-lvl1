import randomNumber from '../utils';
import runGame from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const genGameData = () => {
  const number = randomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const startEven = () => runGame(genGameData, description);

export default startEven;
