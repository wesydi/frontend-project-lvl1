#!/usr/bin/env node
import { name, gcd } from '..';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');
const userName = name();
console.log(`Hello, ${userName}\n`);
console.log(gcd(userName));
