import readlineSync from 'readline-sync';

const generateGame = (game, description) => {
  console.log(`Welcome to the Brain Games!\n${description}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  const iter = (acc) => {
    if (acc === 3) return console.log(`Congratulations, ${userName}!`);
    const [answerCorrect, question] = game();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerCorrect !== answerUser) {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'. \nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(0);
};

export default generateGame;
