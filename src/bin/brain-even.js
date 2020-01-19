#!/usr/bin/env node
import { name, evenNumber } from '..';

console.log(`Welcome to the Brain Games! Answer "yes" if the number is even, otherwise answer "no".`);
console.log(`Hello ${name()}`);
console.log(evenNumber(`John`));

