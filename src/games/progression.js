import randomNumber from '../utils';
import generateGame from '..';

const gameMessage = 'What number is missing in the progression?';

const getProgression = (firstElement, diff, length) => {
  const result = [firstElement];
  for (let i = 1; i < length; i += 1) {
    result.push(firstElement + (diff * i));
  }
  return result;
};

const gameProgression = () => {
  const number = randomNumber(1, 9);
  const progression = getProgression(0, number, 10).slice(1);
  const progressionWithSkip = progression.slice();
  progressionWithSkip[number] = '..';
  const question = String(progressionWithSkip);
  const correctAnswer = String(progression[number]);
  return [correctAnswer, question, gameMessage];
};

const progression = () => generateGame(gameProgression);

export default progression;
