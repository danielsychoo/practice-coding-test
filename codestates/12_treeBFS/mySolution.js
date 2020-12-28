// bfs는 너비우선탐색이므로 각 depth를 싹 돌고 다음 depth 확인
// 1. root.value 체크
// 2. root.children을 for loop으로 돌면서 체크
// 3. recursion으로 다음 depth 이동
// 4. 다음 depth가 없으면 끝
let bfs = function (node) {
  let result = [];

  if(node.value) {
    result.push(node.value);
  }

  const recursion = (remainNode) => {
    if(remainNode.children) {
      for(let i = 0; i < remainNode.children.length; i++) {
        result.push(remainNode.children[i].value);
      }

      for(let n = 0; n < remainNode.children.length; n++) {
        if(remainNode.children[n].children) {
          recursion(remainNode.children[n]);
        }
      }
    }
  }
  recursion(node);
  console.log(result);
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
// let output = bfs(root);
// console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]