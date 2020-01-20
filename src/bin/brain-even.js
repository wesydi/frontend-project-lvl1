#!/usr/bin/env node
import { name, evenNumber } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(evenNumber(userName));
