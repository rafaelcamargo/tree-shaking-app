import { sum } from 'treeshaking-lib';

const heading = document.createElement('h1');
heading.textContent = 'Hello!';
document.body.appendChild(heading);

console.log(sum(3, 5));
