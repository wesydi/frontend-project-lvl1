#!/usr/bin/env node
import name from '..';
import prime from '../games/prime';

console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(prime(userName));
