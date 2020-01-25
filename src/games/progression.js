import randomNumber from '../utils';

const progression = () => {
  const welcomeMessage = 'Welcome to the Brain Games!\nWhat number is missing in the progression?.';
  const number = randomNumber(1, 10);
  let array = [0];
  for (let i = 0; i < 10; i += 1) {
    array.push((array[array.length - 1]) + number);
  }
  array = array.slice(1);
  const arrayProgression = array.slice();
  arrayProgression[number] = '..';
  const question = `${arrayProgression}`;
  const correctAnswer = array[number];
  return [correctAnswer, question, welcomeMessage];
};

export default progression;
