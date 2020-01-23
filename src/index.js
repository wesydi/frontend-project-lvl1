import readlineSync from 'readline-sync';

const name = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const engine = (func) => func; 

export {
  name, engine, 
};
