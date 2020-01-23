import readlineSync from 'readline-sync';

const evenNumber = (usrName) => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
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
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${usrName}!`);
    }
    return iter(randomNumber(1, 100));
  };
  return iter(randomNumber(1, 100));
};
export default evenNumber;
