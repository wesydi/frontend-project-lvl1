#!/usr/bin/env node
import name from '..';
import evenNumber from '../games/even';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(evenNumber(name));
