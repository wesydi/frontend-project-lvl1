#!/usr/bin/env node
import { name, engine } from '..';
import evenNumber from '../games/even.js';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(engine(evenNumber(userName)));
