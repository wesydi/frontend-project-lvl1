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

const gameProgression = () => {
  const number = randomNumber(1, 9);
  const progression = getProgression(randomNumber(1, 10), number, 10);
  const progressionWithSkip = progression.slice();
  progressionWithSkip[number] = '..';
  const question = String(progressionWithSkip);
  const correctAnswer = String(progression[number]);
  return [correctAnswer, question];
};

const progression = () => generateGame(description);

export default progression;
