#!/usr/bin/env node
import name from '..';
import calc from '../games/calc';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(calc(userName));
