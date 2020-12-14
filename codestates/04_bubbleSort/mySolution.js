const bubbleSort = function (arr) {
  let smallerEl = 0;
  let biggerEl = 0;
  let result = arr;
  for(let i = 0; i < arr.length; i++) {
    for(let n = 0; n < arr.length; n++) {
      if(arr[n] > arr[n + 1]) {
        smallerEl = arr[n + 1];
        biggerEl = arr[n];
        result[n] = smallerEl;
        result[n + 1] = biggerEl;
      }
    }
  }
  return result;
}


let output = bubbleSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]