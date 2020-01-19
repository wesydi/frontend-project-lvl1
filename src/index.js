import readlineSync from 'readline-sync';

const name = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const evenNumber = (usrName) => {
  const randomNumber = Math.floor(Math.random() * 10);
  const iter = (number, acc) => {
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question(`Your answer: `);
    if (acc === 3) return `Congratulations, ${usrName}!`;
    if (answerUser === 'yes' && number % 2 === 0 || answerUser === 'no' && number % 2 !== 0) {
      acc += 1;
      console.log(`Correct!`);
    } else {
      acc = 0;
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${usrName}!`);
    }
    return iter(Math.floor(Math.random() * 10), acc);
  };
  return iter(randomNumber, 1);
};
export { name, evenNumber };
