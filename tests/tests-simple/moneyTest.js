import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: format currency');
console.log('Converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('Works with zero');

if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('Rounds upto nearest cents');

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}