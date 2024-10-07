import chalk from 'chalk';

// Chalk test
console.log(chalk.green('Chalk works!'));

// TypeScript test
type Pair2<T> = [first: T, T];
const pair: Pair2<number> = [1, 2];

console.log('TypeScript works!');
