import readlineSync from 'readline-sync';

const generateGame = (dataOfGame) => {
  const [,, gameMessage] = dataOfGame();
  console.log(`Welcome to the Brain Games!\n${gameMessage}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  const iter = (acc) => {
    if (acc === 3) return console.log(`Congratulations, ${userName}!`);
    let newAcc = acc;
    const [answerCorrect, question] = dataOfGame();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerCorrect === answerUser) {
      newAcc += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'. \nLet's try again, ${userName}!`);
    }
    return iter(newAcc);
  };
  return iter(0);
};

export default generateGame;
