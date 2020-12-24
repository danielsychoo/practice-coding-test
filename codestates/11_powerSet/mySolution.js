/*
 * 1. 중복단어 제외
 * 2. 알파벳 순서 정렬 (사전식 순서)
 * 3. 빈 문자열 포함
 */
const powerSet = function (str) {
  let strArr = str.split('');
  let uniqueStrArr = Array.from(new Set(strArr)); // 중복제거

  let result = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === uniqueStrArr.length) {
      // 마지막 문자까지 검토한 경우
      result.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + uniqueStrArr[idx]);
  };

  pickOrNot(0, '');

  return result.sort();
};

// let output1 = powerSet('abc');
// console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']