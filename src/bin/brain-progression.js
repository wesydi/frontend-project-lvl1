#!/usr/bin/env node
import { name, progression } from '..';
import evenNumber from '../games/progression.js';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?.');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(engine(progression(userName)));
