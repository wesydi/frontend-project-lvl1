import readlineSync from 'readline-sync';

export const whatsUrName = () => {
  let userName = readlineSync.question('May I have your name? ')
console.log('Hi ' + userName + '!')
}
