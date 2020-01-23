import readlineSync from 'readline-sync';

const gcd = (usrName) => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let acc = 0;
  const iter = (number, anotherNumber) => {
    if (acc === 3) return `Congratulations, ${usrName}!`;
    console.log(`Question: ${number}, ${anotherNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    let correctAnswer = 0;
    for (let i = 0; i < 100; i += 1) {
      if (number % i === 0 && anotherNumber % i === 0) correctAnswer = i;
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

export default gcd;
