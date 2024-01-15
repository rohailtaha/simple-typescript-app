function showSum(num1: number, num2: number): void {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  alert(`${num1} + ${num2} = ${num1 + num2}`);
}

document
  .querySelector('button')
  ?.addEventListener('click', () => showSum(4, 5));
