const firstNonRepeatedCharacter = function (str) {
  const mem = {};
  // 1. for loop으로 순회하며 key는 str[i], value로 count
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (mem[chr] === undefined) mem[chr] = 1;
    else mem[chr]++;
  }
  // 2. 다시한번 싹 돌면서 value === 1 이면 key return
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (mem[chr] === 1) return chr;
  }
  // 3. value === 1이 없으면 return null
  return null;
};