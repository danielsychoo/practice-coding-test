let tiling = function (n) {
  // edgeCase
  if(n === 1) {
    return 1;
  }
  if(n === 2) {
    return 2;
  }

  return (n - 2) + (n - 1);

};



let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5

/*
----------
1 a b c d e
2 a b c d e
----------
1 a a c c e
2 b b d d e
----------
1 a a c d e
2 b b c d e
----------
1 a b b d d
2 a c c e e
----------
1 a b c c e
2 a b d d e
----------
1 a b c d d
2 a b c e e
----------
 */


// 1 --> 1
// 2 --> 2
// 3 --> 3
// 4 --> 5
// 5 --> 8(?)

