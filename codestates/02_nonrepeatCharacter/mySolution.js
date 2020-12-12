const firstNonRepeatedCharacter = function (str) {
  // 1. str을 2중 for loop으로 순회하며 비교
  let result = {};
  for(let i = 0; i < str.length; i++) {
    for(let n = 0; n < str.length; n++) {
      // 이미 value가 2 이상인 것은 그냥 넘기기
      if(result[str[n]] > 1) {
        continue;
      }
      // 2. key는 str[i], value는 count
      if(str[n] === str[i] && !(result[str[n]])) {
        result[str[n]] = 1;
      } else if(str[n] === str[i]) {
        result[str[n]] ++;
      }
    }
  }
  // 3. 결과값 찾기
  for(let key in result) {
    if(result[key] === 1) {
      return key;
    }
  }
  return null;
}

// let output = firstNonRepeatedCharacter('ABA');
// console.log(output); // --> 'B'

output = firstNonRepeatedCharacter('AAEBDBC');
console.log(output); // --> 'E'