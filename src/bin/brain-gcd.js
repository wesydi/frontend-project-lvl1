#!/usr/bin/env node
import { name, engine } from '..';
import gcd from '../games/gcd.js';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(engine(gcd(userName)));
