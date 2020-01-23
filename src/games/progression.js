import readlineSync from 'readline-sync';

const progression = (usrName) => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let acc = 0;
  const iter = (number) => {
    if (acc === 3) return `Congratulations, ${usrName}!`;
    let array = [0];
    for (let i = 0; i < 10; i += 1) {
      array.push((array[array.length - 1]) + number);
    }
    array = array.slice(1);
    const arrayProgression = array.slice();
    arrayProgression[number] = '..';
    console.log(`Question: ${arrayProgression}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = array[number];
    if (String(correctAnswer) === answerUser) {
      acc += 1;
      console.log('Correct!');
    } else {
      acc = 0;
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${usrName}!`);
    }
    return iter(randomNumber(1, 10));
  };
  return iter(randomNumber(1, 10));
};

export default progression;