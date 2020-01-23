import readlineSync from 'readline-sync';

const calc = (usrName) => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let acc = 0;
  const iter = (number, anotherNumber) => {
    if (acc === 3) return `Congratulations, ${usrName}!`;
    const operations = ['*', '+', '-'];
    const operation = operations[randomNumber(0, 3)];
    console.log(`Question: ${number} ${operation} ${anotherNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    let correctAnswer = 0;
    switch (operation) {
      case '*': correctAnswer = number * anotherNumber;
        break;
      case '+': correctAnswer = number + anotherNumber;
        break;
      default: correctAnswer = number - anotherNumber;
    }
    if (String(correctAnswer) === answerUser) {
      acc += 1;
      console.log('Correct!');
    } else {
      acc = 0;
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${usrName}!`);
    }
    return iter(randomNumber(1, 100), randomNumber(1, 100));
  };
  return iter(randomNumber(1, 100), randomNumber(1, 100));
};

export default calc;
