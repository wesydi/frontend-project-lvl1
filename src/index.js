import readlineSync from 'readline-sync';

const name = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const evenNumber = (usrName) => {
  const randomNumber = Math.floor(Math.random() * 10);
  let acc = 0;
  const iter = (number) => {
    if (acc === 3) return `Congratulations, ${usrName}!`;
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer === answerUser) {
      acc += 1;
      console.log('Correct!');
    } else {
      acc = 0;
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${usrName}!`);
    }
    return iter(Math.floor(Math.random() * 10));
  };
  return iter(randomNumber);
};
export { name, evenNumber };
