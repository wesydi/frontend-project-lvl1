import readlineSync from 'readline-sync';

const runGame = (genGameDate, description) => {
  console.log(`Welcome to the Brain Games!\n${description}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [answerCorrect, question] = genGameDate();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerCorrect !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(acc + 1);
  };
  iter(0);
};

export default runGame;
