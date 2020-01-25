import randomNumber from '../utils';

const evenNumber = () => {
  const welcomeMessage = 'Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".';
  const number = randomNumber(1, 100);
  const question = `${number}`;
  const isEven = (num) => (num % 2 === 0);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [correctAnswer, question, welcomeMessage];
};
export default evenNumber;
