import randomNumber from '../utils';
import generateGame from '..';

const description = 'What number is missing in the progression?';

const getProgression = (firstElement, diff, length) => {
  const result = [firstElement];
  for (let i = 1; i < length; i += 1) {
    result.push(firstElement + (diff * i));
  }
  return result;
};

const genGameData = () => {
  const different = randomNumber(1, 10);
  const firstNumber = randomNumber(1, 10);
  const lengthProgression = 10;
  const progression = getProgression(firstNumber, different, lengthProgression);
  const hiddenIndex = randomNumber(1, 9);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(', ');
  return [correctAnswer, question];
};

const progression = () => generateGame(genGameData, description);

export default progression;
