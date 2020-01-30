import randomNumber from '../utils';
import engine from '..';

const gameMessage = `What number is missing in the progression?`;

const gameProgression = () => {
  const number = randomNumber(1, 9);
  let array = [0];
  for (let i = 0; i < 10; i += 1) {
    array.push((array[array.length - 1]) + number);
  }
  array = array.slice(1);
  const arrayProgression = array.slice();
  arrayProgression[number] = '..';
  const question = String(arrayProgression);
  const correctAnswer = String(array[number]);
  return [correctAnswer, question, gameMessage];
};

const progression = () => engine(gameProgression);

export default progression;
