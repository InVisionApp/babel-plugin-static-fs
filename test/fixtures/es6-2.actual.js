import { readFileSync } from 'fs';
const str = readFileSync(__dirname + '/hello.txt', 'utf8');
console.log(str);
