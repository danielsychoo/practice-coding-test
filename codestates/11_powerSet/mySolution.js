/*
 * 1. 중복단어 제외
 * 2. 알파벳 순서 정렬 (사전식 순서)
 * 3. 빈 문자열 포함
 */
const powerSet = function (str) {
  let result = [''];
  let strArr = str.split('');
  strArr.sort(); // 정렬
  let contrastArr = strArr.slice(0, strArr.length);
  let uniqueSortedArr = [];

  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] !== contrastArr[i+1]) {
      uniqueSortedArr.push(strArr[i]); // 중복제거
    }
  }

  const recursive = function (arr, count, board) {
    // baseCase
    if(count === 0) {
      result.push(board);
    }


  }
};

let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

// let output2 = powerSet('jjump');
// console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']