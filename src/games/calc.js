import randomNumber from '../utils';

const calc = () => {
  const welcomeMessage = 'Welcome to the Brain Games!\nWhat is the result of the expression?';
  const operations = ['*', '+', '-'];
  const operation = operations[randomNumber(0, 3)];
  const number = randomNumber(1, 100);
  const anotherNumber = randomNumber(1, 100);
  const question = `${number} ${operation} ${anotherNumber}`;
  let correctAnswer = 0;
  switch (operation) {
    case '*': correctAnswer = number * anotherNumber;
      break;
    case '+': correctAnswer = number + anotherNumber;
      break;
    default: correctAnswer = number - anotherNumber;
  }
  return [correctAnswer, question, welcomeMessage];
};

export default calc;
