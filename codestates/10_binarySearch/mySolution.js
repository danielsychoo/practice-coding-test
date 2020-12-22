/*
 * 1. O(logN)을 위해 절반씩 나누어가며 줄여나간다.
 * 2. 홀수의 경우 Math.floor(arr.length - 1)를 통해 내림을 주자.
 *
 */

const binarySearch = function (arr, target, resultIndex) {
  let lastIndex = arr.length - 1
  let middleIndex = Math.floor(lastIndex / 2)
  resultIndex = resultIndex || 0;
  // edgeCase
  if(target < arr[0] || target > arr[lastIndex]) return -1;

  // baseCase
  if(arr.length <= 2) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        return resultIndex + i;
      }
    }
  }

  if(target < arr[middleIndex]) {
    arr = arr.slice(0, middleIndex);
    return binarySearch(arr, target, resultIndex);
  } else {
    arr = arr.slice(middleIndex, arr[arr.length]);
    resultIndex += middleIndex; // arr을 slice하는 만큼 초기 index를 바꿔줌
    return binarySearch(arr, target, resultIndex);
  }
};

// let output = binarySearch([4, 6, 8, 9, 10, 15], 9);
// console.log(output); // --> 3

output = binarySearch([0, 1, 2, 3, 4, 5], 1);
console.log(output); // --> 1