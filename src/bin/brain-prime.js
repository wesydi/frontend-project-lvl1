#!/usr/bin/env node
import { name, prime } from '..';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?.');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(prime(userName));
