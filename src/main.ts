import { showSum } from './show-sum';

document
  .querySelector('button')
  ?.addEventListener('click', () => showSum(4, 5));
