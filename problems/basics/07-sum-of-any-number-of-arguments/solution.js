function sum(...args) {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}

//For the purpose of user debugging.
console.log(sum(100, 200, 300, 400)); // 1000

export default sum;
