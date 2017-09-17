export default sum;

function sum(...numbers) {
  return numbers.reduce((acc, number) => number + acc, 0);
}
