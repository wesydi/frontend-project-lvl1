#!/usr/bin/env node
import { name, calc } from '..';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(calc(userName));
