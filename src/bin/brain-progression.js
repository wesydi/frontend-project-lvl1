#!/usr/bin/env node
import { name, engine } from '..';
import progression from '../games/progression';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?.');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(engine(progression(userName)));
