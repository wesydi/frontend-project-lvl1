import readlineSync from 'readline-sync';

const name = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

const engine = (game) => {
  const [correctAnswer, question, welcomeMessage] = game();
  console.log(welcomeMessage);
  const userName = name();
  let acc = 0;
  const iter = (answerCorrect, questions) => {
    if (acc === 3) return console.log(`Congratulations, ${userName}!`);
    console.log(`Question: ${questions}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (String(answerCorrect) === answerUser) {
      acc += 1;
      console.log('Correct!');
    } else {
      acc = 0;
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'. \nLet's try again, ${userName}!`);
    }
    const [newAnswer, newQuestion] = game();
    return iter(newAnswer, newQuestion);
  };
  return iter(correctAnswer, question);
};

export default engine;
