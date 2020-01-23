import readlineSync from 'readline-sync';

const prime = (usrName) => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let acc = 0;
  const iter = (number) => {
    if (acc === 3) return `Congratulations, ${usrName}!`;
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question('Your answer: ');
    const array = [];
    let correctAnswer;
    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) array.push(i);
    }
    if (array.length === 2 && array[0] === 1 && array[1] === number) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';
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

export default prime;
