function solution(rowNum, colNum, alphabetList) {
  console.log('solution')
  console.log(rowNum, colNum, alphabetList)
  // (0, 0) => (1, 0) or (0, -1)
  // (1, 0) => () 
  const twoDimensionList = []
  const curObj = [];
  for (let ele of alphabetList) {
    let alphabet = Array.prototype.map.call(ele, e => e)
    twoDimensionList.push(alphabet)
  }

  curObj.push(twoDimensionList[0][0])
  const root = new Tree(0, 0, alphabetList)

  // twoDimensionBoolList = possible(curObj, twoDimensionBoolList, twoDimensionList)

}

var preorderTraversal = function(root) {
  /**
   * Algorithm:
   * 1. Create an empty stack [];
   * 2. Do while stack is not empty:
   * 2.1. Pop an item from stack and add it to the 'result' array.
   * 2.2. Push 'right child' of popped item to stack.
   * 2.3. Push 'left child' of popped item to stack.
  */
  if (root == null) {
    return [];
  }

  const stack = [];
  const result = [];

  stack.push(root);

  while(stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};

// function possible(currentObj, twoDimensionBoolList, twoDimensionList) {
//   for (let i = 0; i < twoDimensionList.length; i++) {
//     for (let j = 0; j < twoDimensionList[i].length; j++) {
//       if (currentObj.alphabet === twoDimensionList[i][j]) {
//         twoDimensionBoolList[i][j] = true        
//       }
//     }
//   }
//   return twoDimensionBoolList
// } 

// solution(2, 4, ['CAAB', 'ADCB'])

// class Tree {
//   constructor(rowNum, colNum, alphaList) {
//     this.rowNum = rowNum;
//     this.colNum = colNum;
//     this.val = alphaList[0][0];
//     this.left = null;
//     this.right = null;
//     this.bottom = null;
//     this.top = null;
//     this.length = 1;
//   }

//   getVal() {
//     return this.val;
//   }

//   getLeft() {
//     return this.left;
//   }

//   getRight() {
//     return this.right;
//   }

//   getBottom() {
//     return this.bottom;
//   }

//   getTop() {
//     return this.top;
//   }

//   setVal(val) {
//     this.val = val;
//   }

//   setLeft(val) {
//     this.left = val;
//   }

//   setRight(val) {
//     this.right = val;
//   }

//   setBottom(val) {
//     this.bottom = val;
//   }

//   setTop(val) {
//     this.top = val;
//   }

//   preOrderTree(node) {
//     if (!node) return;
//     this.length++;
//     this.preOrderTree(node.left);
//     this.preOrderTree(node.right);
//     this.preOrderTree(node.middle);
//   }
// }

let returnable = 1;
let visited = false;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(x, y, alphaList) {
  returnable = Math.max()

  for (let i = 0; i < 4; i++) {
    
  }
}