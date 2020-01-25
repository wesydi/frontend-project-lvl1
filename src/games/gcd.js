import randomNumber from '../utils';

const gcd = () => {
  const welcomeMessage = 'Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.';
  const number = randomNumber(1, 100);
  const anotherNumber = randomNumber(1, 100);
  const question = `${number}, ${anotherNumber}`;
  let correctAnswer = 0;
  for (let i = 0; i < 100; i += 1) {
    if (number % i === 0 && anotherNumber % i === 0) correctAnswer = i;
  }
  return [correctAnswer, question, welcomeMessage];
};

export default gcd;
