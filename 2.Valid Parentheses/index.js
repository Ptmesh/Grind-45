/**
 * @param {string} s
 * @return {boolean}
 */

// stack
var isValid = function (s) {
  let stack = [];
  let bMap = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char in bMap) {
      let topElement = stack.length ? stack.pop() : "#";
      if (topElement !== bMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
