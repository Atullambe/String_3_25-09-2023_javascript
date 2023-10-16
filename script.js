function areParenthesesBalanced(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
  
    return stack.length === 0;
  }
  
  // Test cases
  console.log(areParenthesesBalanced("(()())")); // Output: true
  console.log(areParenthesesBalanced("())("));   // Output: false
  