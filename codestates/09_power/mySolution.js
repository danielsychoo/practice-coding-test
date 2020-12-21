function power(base, exponent) {
  let result = 1;
  for(let i = 0; i < exponent; i++) {
    result *= base
    if(result > 1000000009) result %= 1000000009;
  }
  return result;
}

// let output = power(2, 10);
// console.log(output); // --> 637940656

let output = power(3, 40);
console.log(output); // --> 637940656

// function power(base, exponent) {
//   let result = base;
//   const recursive = function(base, exponent) {
//     // baseCase
//     if(exponent === 0) {
//       return;
//     }
//     result *= base;
//     result %= 1000000009;
//     recursive(result, exponent - 1);
//   }
//   recursive(base, exponent);
//   return result;
// }