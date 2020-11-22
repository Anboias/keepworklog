// const script2 = require('./script2');
import { largeNumber } from './script2.js';
import module from 'http';

let a = largeNumber;
let b = 5;

setTimeout(() => {
  console.log(1, a + b);
}, 0);
