import randomNumber from '../utils';

const prime = () => {
  const welcomeMessage = 'Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".';
  const number = randomNumber(1, 100);
  const question = `${number}`;
  const isPrime = (num) => {
    const array = [];
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) array.push(i);
    }
    return (array.length === 2 && array[0] === 1 && array[1] === num);
  };
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, question, welcomeMessage];
};

export default prime;
