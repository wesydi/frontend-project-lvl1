import randomNumber from '../utils';
import runGame from '..';

const description = 'What number is missing in the progression?';

const getProgression = (firstElement, diff, length) => {
  const result = [firstElement];
  for (let i = 1; i < length; i += 1) {
    result.push(firstElement + (diff * i));
  }
  return result;
};

const lengthProgression = 10;

const genGameData = () => {
  const firstNumber = randomNumber(1, 10);
  const different = randomNumber(1, 10);
  const progression = getProgression(firstNumber, different, lengthProgression);
  const indexHiddenElement = randomNumber(0, lengthProgression - 1);
  const correctAnswer = String(progression[indexHiddenElement]);
  progression[indexHiddenElement] = '..';
  const question = progression.join(', ');
  return [correctAnswer, question];
};

const startProgression = () => runGame(genGameData, description);

export default startProgression;
