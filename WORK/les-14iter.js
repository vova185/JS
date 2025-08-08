// function range(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
const fib = function fibonacci(n) {
	if (n <= 2) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log(fib(5));