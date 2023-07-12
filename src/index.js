import { sum } from 'tree-shaking-lib';

export const init = () => {
  const heading = document.createElement('h1');
  const p = document.createElement('p');
  heading.textContent = 'Hello!';
  p.textContent = sum(3, 5);
  document.body.appendChild(heading);
  document.body.appendChild(p);
}

init();
