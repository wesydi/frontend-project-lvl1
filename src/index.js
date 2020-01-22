import readlineSync from 'readline-sync';

const name = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

// Brain-even

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
    return iter(Math.floor(Math.random() * 10));
  };
  return iter(randomNumber(1, 100));
};

// Brain-calc

const calc = (usrName) => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let acc = 0;
  const iter = (number, anotherNumber) => {
    if (acc === 3) return `Congratulations, ${usrName}!`;
    const operations = ['*', '+', '-'];
    const operation = operations[randomNumber(0, 3)];
    console.log(`Question: ${number} ${operation} ${anotherNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    let correctAnswer = 0;
    switch (operation) {
      case '*': correctAnswer = number * anotherNumber;
        break;
      case '+': correctAnswer = number + anotherNumber;
        break;
      default: correctAnswer = number - anotherNumber;
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

// Brain-gcd

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

// Brain-progression

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

// Brain-prime

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

export {
  name, evenNumber, calc, gcd, progression, prime,
};
